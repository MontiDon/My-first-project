import axios from "axios";
import { ProfileType } from "../types/Types";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "96774fe2-e841-46ad-a65b-44b215d2ff59"
    }
})

export const userAPI = {

    getUsers(currentPage = 1, pageSize = 11355) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`, {}).then(response => {
                return response.data;
            })
        )
    },
    unfollow(userId: number) {
        return (
            instance.delete(`follow/${userId}`, {}).then(response => {
                return response.data;
            })
        )
    },
    follow(userId: number) {
        return (
            instance.post(`follow/${userId}`, {}).then(response => {
                return response.data;
            })
        )
    }
}

export const profileAPI = {

    getProfile (userId: number) {
        return(
            instance.get(`profile/` + userId)
        )
    },
    getStatus (userId: number) {
        return(
            instance.get(`profile/status/` + userId)
        )
    },
    updateStatus (status: string) {
        return(
            instance.put(`profile/status`, {status: status})
        )
    },
    savePhoto (file: File) {
        const formData = new FormData()
        formData.append('image', file)
        return(
            instance.put(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        )
    },
    saveProfile (profile: ProfileType) {
        return(
            instance.put(`profile`, profile)
        )
    }
}
export enum ResultCode {
    Success = 0,
    Error = 1
}
export enum ResultCodeCaptcha {
    CaptchaIsRequired = 10
}
type Me = {
    data: { id: number, email: string, login: string }
    resultCode: ResultCode | ResultCodeCaptcha
    messages: Array<string>
}
type Login = {
    data: { userId: number}
    resultCode: ResultCode
    messages: Array<string>
}
export const authAPI = {
    me() {
        return(
            instance.get<Me>(`auth/me`).then(response => response.data)
        )
    },
    login(email: string, password: number, rememberMe = false, captcha?: string) {
        return(
            instance.post<Login>(`auth/login`, {email, password, rememberMe, captcha}).then(response => response.data)
        )
    },
    logout() {
        return(
            instance.delete(`auth/login`)
        )
    }
}

export const securityAPI = {
    getCaptcha() {
        return(
            instance.get(`security/get-captcha-url`)
        )
    }
}




