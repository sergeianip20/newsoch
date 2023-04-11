import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': '3c924d97-2d2c-4453-9aea-574f561a646d'
    }
})

export const userApi = {
    getUsers(currentPage: number, pagesSize: number) {
        return instance.get( `/users?page=${currentPage}&count=${pagesSize}`,).then(response => {
            return response.data
        })
    },
    Followed(id:number) {return instance.post(`/follow/${id}`,).then(response => {return response.data}) },
    unFollowed(id:number) {
        return instance.delete( `/follow/${id}`,).then(response => {return response.data })
    }
}



export const Login = () => {
    return instance.get( `/auth/me`,).then(response => {

        return response.data
    })

}
export const ProfileContent=(userId:string)=> {
    return instance.get(`/profile/${userId}`).then((response)=> {
        return response.data
    })
}
