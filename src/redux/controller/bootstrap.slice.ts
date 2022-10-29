import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootEpic, SystemConfig } from "../../common/define-type";
import { filter, map, switchMap } from "rxjs/operators";

import { ajax } from "rxjs/ajax";
import IdentityApi from "../../api/identity/identity.api";
// import MailServiceAPI from "../../api/mail/mailservice.api";
// import MeetingsApi from "../../api/meetings/meetings.api";
// import MemberApi from "../../api/member/member.api";
// import TasksApi from "../../api/tasks/tasks.api";

interface BootstrapState {
    systemConfig: SystemConfig;
    isSuccess: boolean
}
// const PATH_SYSTEM_CONFIG = `${process.env.PUBLIC_URL}/assets/system-config.json`;
const IS_CONFIG_LOCAL = false;
const DEFAULT_CONFIG: SystemConfig = {
    protocol: 'http',
    hostIdentity: 'http://127.0.0.1:5173',
    hostAdvisor: 'http://127.0.0.1:5173',
    // hostMailService: 'http://127.0.0.1:5173',
    // hostMeetings: 'http://127.0.0.1:5173',
    // hostMember: 'http://127.0.0.1:5173',
    // hostTask: 'http://127.0.0.1:5173'
};
const initialStateBootstrap: BootstrapState = {
    systemConfig: DEFAULT_CONFIG,
    isSuccess: false,
};

function updateHostService(host: SystemConfig) {
    IdentityApi.host = host.hostIdentity;
    // MailServiceAPI.host = host.hostMailService
    // MeetingsApi.host = host.hostMeetings;
    // MemberApi.host = host.hostMember;
    // TasksApi.host = host.hostTask;
}
const bootstrapSlice = createSlice({
    name: 'bootstrap',
    initialState: initialStateBootstrap,
    reducers: {
        setSysytemConfig: (state, action: PayloadAction<SystemConfig>) => {
            updateHostService(action.payload);
            state.systemConfig = action.payload;
            state.isSuccess = true;
        },
        fetchConfig: (state) => {
            state.isSuccess = false;
        }
    }
})

// const bootstrap$: RootEpic = (action$) => action$.pipe(
//     filter(fetchConfig.match),
//     switchMap(() => {
//         return ajax.getJSON(PATH_SYSTEM_CONFIG, {
//             headers:  {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//             },
//         }).pipe(map(res => {
//             const config = IS_CONFIG_LOCAL ? DEFAULT_CONFIG : res as SystemConfig;
//             return bootstrapSlice.actions.setSysytemConfig(config)
//         }))
//     })
// );


export const BoostrapEpics = [
    // bootstrap$
];

export const { fetchConfig } = bootstrapSlice.actions;
export const bootstrapReducer = bootstrapSlice.reducer;