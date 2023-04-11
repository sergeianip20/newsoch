import {appActions, appReducer} from "../reducers/AutReducer";

test('correct login test', ()=> {
    const initialState = {
        userId: 0,
        email: '',
        login: '',
        isAuth: false
    }
    let action = appActions.setAuth({userId:2, login:'sergei', email:'sergei@mail.ru'})
    let endState = appReducer(initialState,action)
    expect(endState.email).toBe('sergei@mail.ru')
    expect(endState.login).toBe('sergei')
    expect(endState.userId).toBe(2)
})
test('correct login test', ()=> {
    const initialState = {
        userId: 0,
        email: '',
        login: '',
        isAuth: false
    }
    let action = appActions.setAppStatus({isAuth:true})
    let endState = appReducer(initialState,action)
    expect(endState.isAuth).toBe(true)

})