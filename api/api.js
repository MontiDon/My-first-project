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
    }
}

export const unFollowAPI = {
    unFollow(u = null) {
        return (
            instance.delete(`follow/${u.id}`, {}).then(response => {
                return response.data;
            })
        )
    }
}

export const followAPI = {
    follow(u=null){
        return(
            instance.post(`follow/${u.id}`, {}).then(response => {
                return response.data;
            })
        )
    }
}


