/* eslint-disable */
import SYSTEM_CONSTANTS from '../../common/constants';
import { IUser, LoginRequest, NewResponseLogin, RegisterRequest, ResponseDeparment, ResponseLogin } from '../../common/define-identity';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from "rxjs/operators";
import HttpClient from "../http-client";
import JSEncrypt from 'jsencrypt';
import { error } from 'console';
import { IDataResponse } from '../../common/define-meetings';
import axios from 'axios';
import QueryString from 'qs';
export default class IdentityApi {
    static host = 'http://14.231.84.10:8000';
    static encryptData(text: string, key: string) {
        const jsEncrypt = new JSEncrypt();
        jsEncrypt.setPublicKey(key)
        const encypt = jsEncrypt.encrypt(text);
        return encypt || '';
    }
    static getToken(): Observable<string | null> {
        return HttpClient.get(`${IdentityApi.host}/${SYSTEM_CONSTANTS.API.IDENTITY.CONNECT_TOKEN}`).pipe(
            map((res) => res as string || null)
        );
    }

    static login(body: LoginRequest): any{
        console.log(body)
       
        // var data = qs.stringify({
        //     'grant_type': '',
        //     'username': body.username,
        //     'password': body.password,
        //     'scope': '',
        //     'client_id': '',
        //     'client_secret': '' 
        // });
        var data = `username=${body.username}&password=${body.password}`
        console.log(data);
        var config = {
            method: 'post',
            url: `${IdentityApi.host}/auth/token`,
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };

        return axios(config)

    }

    static register(body: RegisterRequest):any{
        var data = JSON.stringify({
            "user_name": body.user_name,
            "email": body.email,
            "password": body.password,
            "description": "bla bla...."
        });

        var config = {
            method: 'post',
            url: `${IdentityApi.host}/user`,
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };

        return axios(config)
        
    }

    static getCurrentUser(): any{
        console.log((localStorage.getItem('token')))
        var config = {
            method: 'get',
            url: `${IdentityApi.host}/user/me`,
            headers: { 
                'Authorization': `Bearer ${localStorage.getItem('token')}` 
            },
            
        };

        return axios(config)
    }

//     static deparmentId(token : any): Observable<ResponseDeparment | null>{
//         const api = `${IdentityApi.host}/${SYSTEM_CONSTANTS.API.LISTHOTEL.DEPARTMENT}`;
//         return HttpClient.get(api,{ headers: { Authorization : `Bearer ${token}` } }).pipe(
//             map((res) => res as ResponseDeparment || null)
//         )
//     }

    static forgotPassword(email: string): Observable<any | null>{
        const api = `${IdentityApi.host}/${SYSTEM_CONSTANTS.API.IDENTITY.FORGOT}/${email}/notify/passwordreset`;
        return HttpClient.post(api, {}).pipe(
            map((res) => res as any || null, catchError((error) => new Observable)));
        
    }
}