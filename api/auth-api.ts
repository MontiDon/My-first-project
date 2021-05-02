import {instance, APIResponseType} from "./api";

type Me = {
    id: number
    email: string
    login: string
}
type Login = {
    userId: number
}
export const authAPI = {
    me() {
        return (
            instance.get<APIResponseType<Me>>(`auth/me`).then(response => response.data)
        )
    },
    login(email: string, password: number, rememberMe = false, captcha?: string) {
        return (
            instance.post<APIResponseType<Login>>(`auth/login`, {email, password, rememberMe, captcha}).then(response => response.data)
        )
    },
    logout() {
        return (
            instance.delete(`auth/login`)
        )
    }
}