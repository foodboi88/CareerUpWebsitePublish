import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { catchError, filter, mergeMap, switchMap } from "rxjs/operators";
import AdvisorApi from "../../api/Advisor/advisor.api";
import { CareerAdvisor, RootEpic, Specialized, SpecializedOfSchool } from "../../common/define-type";
interface AdvisorState {
    specializedLst: Specialized[],
    loading: boolean,
    specializedOfSchoolLst: SpecializedOfSchool[],
    //     lstTasks: ITask[] | null,

}
const initialStateBootstrap: AdvisorState = {
    specializedLst: [],
    loading: false,
    specializedOfSchoolLst: []
    //     lstTasks: null,

};

const advisorSlice = createSlice({
    name: 'advisor',
    initialState: initialStateBootstrap,
    reducers: {

        sendAnswersRequest: (state: AdvisorState, action: PayloadAction<any>) => {
            state.loading = true;
        },
        sendAnswersSuccess: (state: AdvisorState, action: PayloadAction<Specialized[]>) => {
            state.specializedLst = action.payload
            state.loading = false;
            console.log(action.payload)
        },
        sendAnswersFail: (state: AdvisorState, action: any) => {
            state.loading = false;

        },

        // Get Specialized list
        getSpecializedRequest: (state: AdvisorState, action: PayloadAction<void>) => {
            state.loading = true;
        },

        getSpecializedSuccess: (state: AdvisorState, action: PayloadAction<Specialized[]>) => {
            state.specializedLst = action.payload
            state.loading = false;
        },

        getSpecializedFail: (state: AdvisorState, action: any) => {
            state.loading = false;

        },

        // Get Specialized by id request
        getSpecializedByIdRequest: (state, action: PayloadAction<String>) => {
            state.loading = true;
        },
        getSpecializedByIdSuccess: (state, action: PayloadAction<Specialized[]>) => {
            state.specializedLst = action.payload;
            state.loading = false;
        },
        getSpecializedByIdFailed(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },

        // Send career advisor request
        sendCareerAdvisorRequest: (state: AdvisorState, action: PayloadAction<CareerAdvisor[]>) => {
            state.loading = true;
        },
        sendCareerAdvisorSuccess: (state: AdvisorState, action: PayloadAction<SpecializedOfSchool[]>) => {
            state.specializedOfSchoolLst = action.payload
            state.loading = false;
            console.log(action.payload)
        },
        sendCareerAdvisorFail: (state: AdvisorState, action: any) => {
            state.loading = false;

        },

        // Get SpecializedOfSchool of school list
        getSpecializedOfSchoolRequest: (state: AdvisorState, action: PayloadAction<void>) => {
            state.loading = true;
        },

        getSpecializedOfSchoolSuccess: (state: AdvisorState, action: PayloadAction<SpecializedOfSchool[]>) => {
            state.specializedOfSchoolLst = action.payload
            state.loading = false;
        },

        getSpecializedOfSchoolFail: (state: AdvisorState, action: any) => {
            state.loading = false;

        },

        // Get SpecializedOfSchool by id request
        getSpecializedOfSchoolByIdRequest: (state, action: PayloadAction<String>) => {
            state.loading = true;
        },
        getSpecializedOfSchoolByIdSuccess: (state, action: PayloadAction<SpecializedOfSchool[]>) => {
            state.specializedOfSchoolLst = action.payload;
            state.loading = false;
        },
        getSpecializedOfSchoolByIdFailed(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
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

const getSpecialized$: RootEpic = action$ =>
    action$.pipe(filter(getSpecializedRequest.match),
        switchMap(() => {
            return AdvisorApi.getSpecialized().pipe(
                mergeMap((res: any) => {
                    return [advisorSlice.actions.getSpecializedSuccess(res.data.items)];
                }),
                catchError(err => {
                    console.error(err)
                    return [advisorSlice.actions.getSpecializedFail(false)]
                }),
            );
        }),
    );
const getSpecializedById$: RootEpic = action$ =>
    action$.pipe(filter(getSpecializedByIdRequest.match),
        switchMap((re: any) => {
            console.log(re);
            return AdvisorApi.getSpecializedById(re.payload).pipe(
                mergeMap((res: any) => {
                    return [advisorSlice.actions.getSpecializedByIdSuccess(res.data)];
                }),
                catchError(err => {
                    console.error(err)
                    return [advisorSlice.actions.getSpecializedByIdFailed(false)]
                }),
            );
        }),
    );

const sendCareerAdvisor$: RootEpic = action$ =>
    action$.pipe(filter(sendCareerAdvisorRequest.match),
        switchMap((re: any) => {
            console.log(re);
            return AdvisorApi.sendCareerAdvisor(re).pipe(
                mergeMap((res: any) => {
                    console.log(res);
                    return [advisorSlice.actions.sendCareerAdvisorSuccess(res.data.items)];
                }),
                catchError(err => {
                    console.log(err)
                    return [advisorSlice.actions.sendCareerAdvisorFail(err)]
                }),
            );
        }),
    );

const getSpecializedOfSchool$: RootEpic = action$ =>
    action$.pipe(filter(getSpecializedRequest.match),
        switchMap(() => {
            return AdvisorApi.getSpecialized().pipe(
                mergeMap((res: any) => {
                    return [advisorSlice.actions.getSpecializedSuccess(res.data.items)];
                }),
                catchError(err => {
                    console.error(err)
                    return [advisorSlice.actions.getSpecializedFail(false)]
                }),
            );
        }),
    );
const getSpecializedOfSchoolById$: RootEpic = action$ =>
    action$.pipe(filter(getSpecializedByIdRequest.match),
        switchMap((re: any) => {
            console.log(re);
            return AdvisorApi.getSpecializedById(re.payload).pipe(
                mergeMap((res: any) => {
                    return [advisorSlice.actions.getSpecializedByIdSuccess(res.data)];
                }),
                catchError(err => {
                    console.error(err)
                    return [advisorSlice.actions.getSpecializedByIdFailed(false)]
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
    getSpecialized$,
    getSpecializedById$,
    sendCareerAdvisor$,
    getSpecializedOfSchool$,
    getSpecializedOfSchoolById$,
];
export const {
    sendAnswersRequest,
    getSpecializedRequest,
    getSpecializedByIdRequest,
    sendCareerAdvisorRequest,
    getSpecializedOfSchoolRequest,
    getSpecializedOfSchoolByIdRequest

} = advisorSlice.actions;
export const advisorReducer = advisorSlice.reducer;