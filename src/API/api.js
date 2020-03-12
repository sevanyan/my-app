import * as axios from "axios";

const instance = axios.create(
    {
        withcridentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "2094cee2-a415-494f-a1bb-1f40e1be7cf3"
        },
        setUsers: 12
    });

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10 ){
        return instance.get(`users?page=${currentPage}&count = ${pageSize}&page=${setUsers}`)
            .then(response => {
                return response.data;
            });
    },
    onPageChanger(setUsers = 1 ) {
        return instance.get(`users?page=${setUsers}`)
            .then(response => {
                return response.data;
            });
    }
}