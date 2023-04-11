import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {appReducer} from "./reducers/AutReducer";
const rootReducer = combineReducers({
    appReducer
})

export const store = configureStore({
    reducer: rootReducer,
})