import * as axios from "axios";

export const getUsers = (currentPage = 1 ,pageSize = 0) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count = ${pageSize}`,
    {
        withCredentials: true
    })
}


export const  pageChanger = (pageNumber = 1 , pageSize= 0) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count = ${pageSize} `,
        {
            withCredentials: true
        })
}

