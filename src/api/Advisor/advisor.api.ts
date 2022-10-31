/* eslint-disable new-parens */
import HttpClient from "../http-client";
import SYSTEM_CONSTANTS from "../../common/constants";
import { ICreateMeetingsReq, IDataObjectResponse, IDataResponse, IGetMeetingsReq, IMeetings, IMemberInMeetings, IMemberWithRole, ITask } from "../../common/define-meetings";
import { GetAllMemberReq, GetAllMembersWithRoleReq, GetAllTaskReq, Question, QuestionRequest, Specialized } from "../../common/define-type";
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from "rxjs/operators";

export default class AdvisorApi {
    static host = 'http://localhost:8000';

    static sendAnswers(params: any): Observable<IDataResponse<Specialized[]> | null> {
        const api = `${AdvisorApi.host}/${SYSTEM_CONSTANTS.API.ADVISOR.SEND_ANSWERS}`;
        return HttpClient.post(api,params).pipe(
            map((res) => res as IDataResponse<Specialized[]> || null, catchError((error) => new Observable))
        );
    }

    // static getTasks(params: GetAllTaskReq): Observable<IDataResponse<ITask> | null> {
    //     const api = `${AdvisorApi.host}/${SYSTEM_CONSTANTS.API.TASK.GET_ALL}?size=${params.size}${params.name ? `&name=${params.name}` : ''}`;
    //     return HttpClient.get(api).pipe(
    //         map((res) => res as IDataResponse<ITask> || null, catchError((error) => new Observable)));

    // }
    // static getTasksByName(params: String): Observable<IDataResponse<ITask> | null> {
    //     const api = `${AdvisorApi.host}/${SYSTEM_CONSTANTS.API.TASK.GET_ALL}?name=${params}`;
    //     return HttpClient.get(api).pipe(
    //         map((res) => res as IDataResponse<ITask> || null, catchError((error) => new Observable)));

    // }
    // static getRoles(): Observable<IDataResponse<ITask> | null> {
    //     const api = `${AdvisorApi.host}/${SYSTEM_CONSTANTS.API.ROLE.GET_ALL}`;
    //     return HttpClient.get(api).pipe(
    //         map((res) => res as IDataResponse<ITask> || null, catchError((error) => new Observable)));

    // }

    // static getAdvisor(body: IGetAdvisorReq): Observable<IDataResponse<IAdvisor> | null> {
    //     const api = `${AdvisorApi.host}/${SYSTEM_CONSTANTS.API.Advisor.FILTER_Advisor}`;
    //     return HttpClient.post(api, body).pipe(
    //         map((res) => res as IDataResponse<IAdvisor> || null, catchError((error) => new Observable)));

    // }
    // static getAdvisorById(meetingId: string): Observable<IDataResponse<any> | null> {
    //     const api = `${AdvisorApi.host}/${SYSTEM_CONSTANTS.API.Advisor.GET_MEETING_BY_ID.replace('{meetingId}', meetingId)}`;
    //     return HttpClient.get(api).pipe(
    //         map((res) => res as IDataResponse<IAdvisor> || null, catchError((error) => new Observable)));
    // }
    // static createAdvisor(body: ICreateAdvisorReq): Observable<IDataResponse<any> | null> {
    //     const api = `${AdvisorApi.host}/${SYSTEM_CONSTANTS.API.Advisor.CREATE_Advisor}`;
    //     return HttpClient.post(api, body).pipe(
    //         map((res) => res as IDataResponse<IAdvisor> || null, catchError((error) => new Observable)));
    // }

    // static updateAdvisor(meetingId: string, body: ICreateAdvisorReq): Observable<IDataResponse<any> | null> {
    //     const api = `${AdvisorApi.host}/${SYSTEM_CONSTANTS.API.Advisor.UPDATE_Advisor.replace('{meetingId}', meetingId)}`;
    //     return HttpClient.put(api, body).pipe(
    //         map((res) => res as IDataResponse<IAdvisor> || null, catchError((error) => new Observable)));
    // }

    // static deleteAdvisor(meetingId: string): Observable<IDataObjectResponse<any> | null> {
    //     const api = `${AdvisorApi.host}/${SYSTEM_CONSTANTS.API.Advisor.DELETE_Advisor.replace('{meetingId}', meetingId)}`;
    //     return HttpClient.delete(api).pipe(
    //         map((res) => res as IDataObjectResponse<IAdvisor> || null, catchError((error) => new Observable)));
    // }

    // static getMembers(body: GetAllMemberReq): Observable<IDataResponse<IMemberInAdvisor> | null> {
    //     const api = `${AdvisorApi.host}/${SYSTEM_CONSTANTS.API.MEMBER.GET_ALL}`;
    //     return HttpClient.post(api, body).pipe(
    //         map((res) => res as IDataResponse<IMemberInAdvisor> || null, catchError((error) => new Observable)));
    // }

    // static getAllMembersWithRole(body: GetAllMembersWithRoleReq): Observable<IDataResponse<IMemberWithRole> | null> {
    //     const api = `${AdvisorApi.host}/${SYSTEM_CONSTANTS.API.MEMBER.GET_ALL_WITH_ROLE}?offset=${body.offset}&size=${body.size}`;
    //     return HttpClient.get(api).pipe(
    //         map((res) => res as IDataResponse<IMemberWithRole> || null, catchError((error) => new Observable)));
    // }
}