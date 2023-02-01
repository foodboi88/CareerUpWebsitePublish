/* eslint-disable new-parens */
import axios from "axios";
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from "rxjs/operators";
import SYSTEM_CONSTANTS from "../../common/constants";
import { IDataResponse } from "../../common/define-meetings";
import { SpecializedOfSchool } from "../../common/define-type";
import HttpClient from "../http-client";

export default class AdvisorApi {
    
    static sendCareerAdvisor(re: any) {
        throw new Error("Method not implemented.");
    }
    static host = 'https://api.careerup.inres.ai';

    // static sendAnswers(params: QuestionRequest[]): Observable<IDataResponse<testResponse[]> | null> {
    //     const api = `${AdvisorApi.host}/${SYSTEM_CONSTANTS.API.ADVISOR.SEND_ANSWERS}`;
    //     return HttpClient.post(api,params).pipe(
    //         map((res) => res as IDataResponse<testResponse[]> || null, catchError((error) => new Observable))
    //     );
    // }

    static sendAnswers(params: any[]): any{
      var config = {
        method: 'post',
        url: `${AdvisorApi.host}/question`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : JSON.stringify(params)
      };
      return axios(config)
    }

    

    static getSpecializedOfSchool(id: string, mark: string, unit_names: string): any {
      var config = {
        method: 'get',
        url: `${AdvisorApi.host}/school/search?specialized_id=${id}&mark=${mark}&unit_names=${unit_names}\n`,
        headers: { },
      };
      return axios(config)
    }

    // static getSpecializedOfSchoolById(specializedOfSchoolId: string): Observable<IDataResponse<SpecializedOfSchool> | null> {
    //     const api = `${AdvisorApi.host}/${SYSTEM_CONSTANTS.API.SPECIALIZED_OF_SCHOOL.GET_SPECIALIZED_OF_SCHOOL_BY_ID.replace('{specializedOfSchoolId}', specializedOfSchoolId)}`;
    //     return HttpClient.get(api).pipe(
    //         map((res) => res as IDataResponse<SpecializedOfSchool> || null, catchError((error) => new Observable)));

    // }
    static getQuestions(): any {
        var config = {
          method: 'get',
          url: `${AdvisorApi.host}/question`,
          headers: { },
        };
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
          
    }

    static getUnit(): any {
        var config = {
          method: 'get',
          url: `${AdvisorApi.host}/unit?limit=149&offset=0`,
          headers: { },
        };
        return axios(config)
    }

    static getSpecialized(): any {
        var config = {
          method: 'get',
          url: `${AdvisorApi.host}/specialized?limit=1000&offset=0`,
          headers: { },
        };
        return axios(config)
    }

    static getSimilarSpecialized(id: string): any {
        var config = {
          method: 'get',
          url: `${AdvisorApi.host}/specialized/${id}/similar`,
          headers: { },
        };
        return axios(config)
    }
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