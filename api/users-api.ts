import {GetItemsType, instance, APIResponseType} from './api'


export const userAPI = {
    getUsers(currentPage = 1, pageSize = 11355, term: string = '', friend: null | boolean = null) {
        return (
            instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`)).then(response => {
                return response.data;
            })
        )
    },
    unfollow(userId: number) {
        return (
            instance.delete<APIResponseType>(`follow/${userId}`, {}).then(response => {
                return response.data;
            })
        )
    },
    follow(userId: number) {
        return (
            instance.post<APIResponseType>(`follow/${userId}`, {}).then(response => {
                return response.data;
            })
        )
    }
}