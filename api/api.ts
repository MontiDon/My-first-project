import axios from "axios";
import {UsersType} from "../types/Types";

export const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "96774fe2-e841-46ad-a65b-44b215d2ff59"
    }
})

export enum ResultCode {
    Success = 0,
    Error = 1
}
export enum ResultCodeCaptcha {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UsersType>
    totalCount: number
    error: string | null
}


export type APIResponseType<D = {}, RC = ResultCode> = {
    data: D
    messages: Array<string>
    resultCode: RC
}