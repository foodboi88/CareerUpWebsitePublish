import { combineReducers } from "@reduxjs/toolkit";
import { combineEpics } from "redux-observable";
import {
    AdvisorEpics,
    advisorReducer,
    // BoostrapEpics, bootstrapReducer,
     HeaderEpics, headerReducer } from './controller';
import { LoginEpics, loginReducer } from "./controller/login.slice";

const rootReducer = combineReducers({
    // bootstrap: bootstrapReducer,
    login: loginReducer,
    header: headerReducer,
    advisor: advisorReducer,
});

export const rootEpic = combineEpics(
    // ...BoostrapEpics,
    ...AdvisorEpics,
    ...LoginEpics,
    ...HeaderEpics
);
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer; 