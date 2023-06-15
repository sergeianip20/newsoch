import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {InitialStateAuth} from "../../Type/StateType";
import {thunkTryCatch} from 'common/tryCatchThunk';
import {createAppAsyncThunk} from 'state/createAsyncThunkApp'
const initialState = {
    userId: 0,
    email: '',
    login: '',
    isAuth: false
}


const me = createAppAsyncThunk<{ profile: ProfileType }, ''>
("auth/me", async (arg:any, thunkAPI) => {
  const res = await authApi.authMe();
  return { profile: res.data };
})
const login = createAppAsyncThunk<{ userId: number }, ArgLoginType>("auth/login", async (arg, thunkAPI) => {
    return thunkTryCatch(
        thunkAPI,
        async () => {
            const res = await authApi.login(arg);
            return profile: res.data.userId
        },
        true
    )
})

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
