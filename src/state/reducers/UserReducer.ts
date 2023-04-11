import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export type InitialStateUserType = {
    users: Array<usersTypeData>
    pagesSize:number
    totalUsersCount:number,
    currentPage:number
    preloader:boolean,
    toggleisFollowed:Array<number>
}
export type usersTypeData = {
    id: number,
    followed: boolean
    name: string
    status: string| null
    photos: {
        large: string| null
        small: string| null
    }
    uniqueUrlName:string|null
}
let initialState: InitialStateUserType = {
    users: [ ],
    pagesSize: 5,
    totalUsersCount:20,
    currentPage:1,
    preloader: true,
    toggleisFollowed:[]
}
const slice = createSlice({
    name:'Users',
    initialState,
    reducers:{

    }
})