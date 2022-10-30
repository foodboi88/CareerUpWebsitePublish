import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Question, RootEpic, Specialized } from "../../common/define-type";
import { catchError, filter, mergeMap, switchMap } from "rxjs/operators";
import AdvisorApi from "../../api/Advisor/advisor.api";
interface AdvisorState {
    specializedLst: Specialized[],
    loading: boolean,
//     lstTasks: ITask[] | null,

}
const initialStateBootstrap: AdvisorState = {
    specializedLst: [],
    loading: false,
//     lstTasks: null,

};

const advisorSlice = createSlice({
    name: 'advisor',
    initialState: initialStateBootstrap,
    reducers: {

        sendAnswersRequest: (state: AdvisorState, action: PayloadAction<Question[]>) => {
            state.loading = true;
        },
        sendAnswersSuccess: (state: AdvisorState,action: PayloadAction<Specialized[]>) =>{
            state.specializedLst = action.payload
            state.loading = false;
            console.log(action.payload)
        },
        sendAnswersFail: (state: AdvisorState, action: any) => {
            state.loading = false;
            
        }
//         // Get task Request
//         getTasksRequest: (state: { loading: boolean; }, action: PayloadAction<void>) => {
//             state.loading = true;
//         },
//         getTasksSuccess: (state, action: PayloadAction<ITask[] | null>) => {
//             console.log(action.payload);
//             state.lstTasks = action.payload;
//         },
//         getTasksFailed(state, action: PayloadAction<boolean>) {
//             state.loading = action.payload;
//         },


//         // Create Tasks Request
//         createTasksRequest: (state, action: PayloadAction<any>) => {
//             state.loading = true;
//         },
//         createTasksSuccess: (state, action: PayloadAction<ITask[] | null>) => {
//             console.log(action.payload);
//         },
//         createTasksFailed(state, action: PayloadAction<boolean>) {
//             state.loading = action.payload;
//         },
            // setHeaderStatusRequest(state, action: PayloadAction<any>){
            //     state.headerState = action.payload;
            //     console.log(state.headerState)
            // },
               

    }
})

const sendAnswers$: RootEpic = action$ =>
    action$.pipe(filter(sendAnswersRequest.match),
        switchMap((re: any) => {
            console.log(re);
            return AdvisorApi.sendAnswers(re).pipe(
                mergeMap((res: any) => {
                    console.log(res);
                    return [advisorSlice.actions.sendAnswersSuccess(res.data.items)];
                }),
                catchError(err => {
                    console.log(err)
                    return [advisorSlice.actions.sendAnswersFail(err)]
                }),
            );
        }),
    );


// const setHeaderStatus$: RootEpic = action$ =>
//     action$.pipe(
//         filter(setHeaderStatusRequest.match),
//         mergeMap(() => {
//             return [
//                 headerSlice.actions.setHeaderStatusSuccess(),
//                 // headerSlice.actions.setLoading(false)
//             ]
//         })
//     );

export const AdvisorEpics = [
    sendAnswers$,

];
export const {
    sendAnswersRequest,
} = advisorSlice.actions;
export const advisorReducer = advisorSlice.reducer;