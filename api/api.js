import axios from "axios";

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
    unfollow(userId) {
        return (
            instance.delete(`follow/${userId}`, {}).then(response => {
                return response.data;
            })
        )
    },
    follow(userId){
        return(
            instance.post(`follow/${userId}`, {}).then(response => {
                return response.data;
            })
        )
    },
    getProfile (userId) {
        return(
            instance.get(`profile/` + userId)
        )
    }
}
export const authAPI = {
    me() {
        return(
            instance.get(`auth/me`)
        )
    }
}




