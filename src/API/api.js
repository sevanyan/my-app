import * as axios from "axios";


const intance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "2094cee2-a415-494f-a1bb-1f40e1be7cf3"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const getUsers = (currentPage = 1, pageSize = 0) => {
    return intance.get(`users?page=${currentPage}&count = ${pageSize}`)
}

export const pageChanger = (pageNumber = 1, pageSize = 0) => {
    return intance.get(`users?page=${pageNumber}&count = ${pageSize} `)
}

export const followUser = (uuid) => {
    return intance.get(`follow/${uuid}`);
}

export const unfollowUser = (uuid, data = {}) => {
    return intance.post(`follow/${uuid}`, data);
}





