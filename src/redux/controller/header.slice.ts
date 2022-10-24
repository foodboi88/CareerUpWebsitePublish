import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootEpic } from "../../common/define-type";
import { catchError, filter, mergeMap, switchMap } from "rxjs/operators";
interface HeaderState {
    headerState: string,
    loading: boolean,
//     lstTasks: ITask[] | null,

}
const initialStateBootstrap: HeaderState = {
    headerState: '',
    loading: false,
//     lstTasks: null,

};

const headerSlice = createSlice({
    name: 'tasks',
    initialState: initialStateBootstrap,
    reducers: {
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
            setHeaderStatusRequest(state, action: PayloadAction<any>){
                state.headerState = action.payload;
                console.log(state.headerState)
            },
               

    }
})

// const getTasks$: RootEpic = action$ =>
//     action$.pipe(filter(getTasksRequest.match),
//         switchMap(() => {
//             return TasksApi.getTasks().pipe(
//                 mergeMap((res: any) => {
//                     console.log(res);
//                     return [tasksSlice.actions.getTasksSuccess(res.data.items)];
//                 }),
//                 catchError(err => {
//                     console.log(err)
//                     return [tasksSlice.actions.getTasksFailed(false)]
//                 }),
//             );
//         }),
//     );


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

export const HeaderEpics = [];
export const {
    setHeaderStatusRequest
} = headerSlice.actions;
export const headerReducer = headerSlice.reducer;