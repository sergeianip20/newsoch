import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {InitialStateAuth} from "../../Type/StateType";

const initialState = {
    userId: 0,
    email: '',
    login: '',
    isAuth: false
}
export type AppInitialStateType = typeof initialState
const scile = createSlice({
    name:'app',
    initialState,
    reducers:{
        setAuth(state:AppInitialStateType, action:PayloadAction<{userId:number, email:string, login:string}>) {
            state.email = action.payload.email
            state.userId= action.payload.userId
            state.login = action.payload.login
        },
        setAppStatus: (state, action: PayloadAction<{ isAuth: boolean }>) => {
            state.isAuth = action.payload.isAuth
        },

    }
})
export const appReducer = scile.reducer
export const appActions = scile.actions