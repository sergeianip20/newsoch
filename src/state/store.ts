import {configureStore, combineReducers, ThunkDispatch, ThunkAction, AnyAction} from "@reduxjs/toolkit";
import {appReducer} from "./reducers/AutReducer";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {ProfileReducers} from "./reducers/ProfileReducer";
import {Userreducer} from "./reducers/UserReducer";
const rootReducer = combineReducers({
    appReducer,
    dialogsReducer,
    ProfileReducers,
    Userreducer
})

export const store = configureStore({
    reducer: rootReducer,
})



export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>