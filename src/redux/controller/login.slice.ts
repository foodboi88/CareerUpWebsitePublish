/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-debugger */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IdentityApi from "../../api/identity/identity.api";
import { RootEpic } from "../../common/define-type";
import { IUser, LoginRequest, RegisterRequest, ResponseDeparment } from "../../common/define-identity";
import Utils from "../../common/utils";
import { catchError, filter, switchMap,mergeMap, map } from "rxjs/operators";
import { WritableDraft } from "immer/dist/internal";
import openNotification, { NotificationType } from "../../common/notification/Notification";

type MessageLogin = {
    content: string;
    errorCode?: number
}
type MessageForgot = {
    ErrorCode?: number,
    Message: string
}
interface LoginState {
    loading: boolean;
    isSuccess: boolean;
    user: IUser | undefined;
    message: MessageLogin | undefined;
    messageForgot: MessageForgot | undefined;
    departmentId : number;
    refresh_token: string;
    statusCode: string | undefined
}

const initState: LoginState = {
    loading: false,
    isSuccess: true,
    user: undefined,
    departmentId : 1,
    message: undefined,
    messageForgot: undefined,
    refresh_token: "",
    statusCode: undefined,
}

const loginSlice = createSlice({
    name: 'login',
    initialState: initState,
    reducers: {
        loginRequest(state, action: PayloadAction<LoginRequest>) {
            state.loading = true;
            // console.log("da chui vao",state.loading)
        },
        loginSuccess(state, action: PayloadAction<{ user: IUser, token: string}>) {
            Utils.setLocalStorage('token', action.payload.token);
            // state.loading = false;
            // Utils.setLocalStorage("email", action.payload.user.email);
            // Utils.setLocalStorage("id", action.payload.user.id);
            // Utils.setLocalStorage("password", action.payload.user.password);
            // Utils.setLocalStorage("refresh_token", action.payload.refresh_token)
            // Utils.setLocalStorage("email", action.payload.user.)
            Utils.setLocalStorage("userEmail", action.payload.user.email)
            // Utils.setLocalStorage("expires", action.payload.expires_token)
            state.user = action.payload.user
            state.loading = false
            state.isSuccess = true;
        },
        loginFail(state, action: any){
            console.log(action);
            if(action.payload.response===null) openNotification(NotificationType.Info, 'topRight', 'Mất kết nối mạng!', ``);
            else openNotification(NotificationType.Info, 'topRight', action.payload.response.message, ``);
            state.message = action.payload.message
        },
        checkAbleToLogin(state,action: PayloadAction<string>){
            state.statusCode=action.payload;
        }
        ,
        getInfoUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload
        },
        forgotRequest(state, action: PayloadAction<string>) {
            state.loading = true
        },
        sendMailSuccess(state, action: PayloadAction<{message: WritableDraft<MessageLogin> | undefined}>) {
            state.message = action.payload.message
            state.loading = false
            state.isSuccess = true;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload
        },
        getDepartmentRequest(state, action : PayloadAction<string>){
            state.loading = true;
        },
        getDepartmentSuccess(state,action : PayloadAction<ResponseDeparment>){
            state.isSuccess = true;
            state.departmentId = action.payload.departmentId;
        },
        message(state, action: PayloadAction<MessageLogin>) {
            state.message = action.payload;
            state.loading = false
        },
        messageForgot(state, action: PayloadAction<MessageForgot>) {
            state.messageForgot = action.payload;
            state.loading = false
        },
        clearMessageResquest(state) {
            state.loading = true
        },
        clearMessage(state) {
            state.messageForgot = undefined;
            state.message = undefined;
            state.loading = false
        },
        setStatusCode(state, action : PayloadAction<string>){
            state.statusCode = action.payload;
        },
        clearAllRequest(state){
            state.loading = true;
            state.statusCode = undefined;
            state.user = undefined;
        },

        registerRequest(state, action: PayloadAction<RegisterRequest>) {
            state.loading = true;
            console.log('Da chui vao voi action: ',action);
        },

        registerSuccess(state, action: PayloadAction<any>) {
            openNotification(NotificationType.Info, 'topRight', `Đăng ký tài khoản mới thành công!`, ``);

            state.user = action.payload.user
            state.isSuccess = true;
        },

        registerFail(state, action: PayloadAction<any>) {
            openNotification(NotificationType.Info, 'topRight', `Tài khoản đã tồn tại!`, ``);

            state.loading = false
        },
    }
})

// const login$: RootEpic = (action$) => action$.pipe(
//     filter(loginRequest.match),
//     switchMap((re) => {
//         // IdentityApi.login(re.payload) ?
//         console.log(re.payload);
//         const body: LoginRequest = {
//             "email": re.payload.email,
//             "password": re.payload.password,
//             "remember": re.payload.remember,
//         };
//         return IdentityApi.login(body).pipe(
//             mergeMap((res: any) => {
//                     console.log(res);
//                     console.log(res.data.accessToken);
//                     const token = res.data.accessToken
//                     const user: IUser = {
//                         email: res.data.email,
//                         id: res.data.id,
//                     };
//                     console.log(user);
//                     return [
//                         loginSlice.actions.loginSuccess({ user, token: token }),
//                         loginSlice.actions.setLoading(false),
//                         loginSlice.actions.setStatusCode(res.statusCode)
//                     ];
//             }),
//             catchError(err => [loginSlice.actions.loginFail(err)])
//         )
//     })
// )


const forgot$ : RootEpic = (action$) => action$.pipe(
    filter(forgotRequest.match),
    switchMap((re) => {
        return IdentityApi.forgotPassword(re.payload).pipe(
            map((res:any) => {
                return loginSlice.actions.messageForgot({Message: "success"});
            }),catchError(err => [loginSlice.actions.messageForgot(err.response)])
        )
    })
)

const clearMessage$ : RootEpic = (action$) => action$.pipe(
    filter(clearMessageResquest.match),
    map(() => {return loginSlice.actions.clearMessage()})
)

const logOut$ : RootEpic = (action$) => action$.pipe(
    filter(clearAllRequest.match),
    mergeMap(() => {
        return [
            loginSlice.actions.clearAllRequest(),
            loginSlice.actions.setLoading(false)
        ]
    })
)

// const register$: RootEpic = (action$) => action$.pipe(
//     filter(registerRequest.match),
//     switchMap((re) => {
//         console.log(re.payload);
//         const body: RegisterRequest = {
//             "email": re.payload.email,
//             "password": re.payload.password,
//             "confirmPassword": re.payload.confirmPassword,
//         };
//         return IdentityApi.register(body).pipe(
//             mergeMap((res: any) => {
//                     return [
//                         loginSlice.actions.setLoading(false),
//                         loginSlice.actions.setStatusCode(res.statusCode),
//                         loginSlice.actions.registerSuccess(res)
//                     ];   
//             }),
//             catchError(err => 
//                 [   
//                     loginSlice.actions.setStatusCode('UniqueEmail'),
//                     loginSlice.actions.registerFail(err)
//                 ]
//             )
//         )
//     })
// )

const ableToLogin$ : RootEpic = (action$) => action$.pipe(
    filter(checkAbleToLogin.match),
    mergeMap(() => {
        return [
            loginSlice.actions.checkAbleToLogin("OK"),
        ]
    })
)


export const LoginEpics = [
    // login$,
    forgot$,
    clearMessage$,
    logOut$,
    // register$
]
export const {
    // getDepartmentRequest,
    loginRequest,
    forgotRequest,
    clearMessageResquest,
    getInfoUser,
    clearAllRequest,
    registerRequest,
    checkAbleToLogin
} = loginSlice.actions
export const loginReducer = loginSlice.reducer