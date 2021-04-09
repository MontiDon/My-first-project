import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const LOADING = 'LOADING'
const GET_CAPTCHA = 'GET_CAPTCHA'

export type InitialStateType = typeof initialState
let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    isFetching: true,
    captcha: null as string | null
};

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA:
            return {
                ...state,
                ...action.payload
            }
        case LOADING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}
type SetAuthUserDataPayload = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type SetAuthUserData = {
    type: typeof SET_USER_DATA
    payload: SetAuthUserDataPayload
}
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserData => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth} })

type LoadingType = {
    type: typeof LOADING
    isFetching: boolean
}
export const loading = (isFetching: boolean): LoadingType => ({type: LOADING, isFetching: isFetching})

type SetCaptchaType = {
    type: typeof GET_CAPTCHA
    payload: {captcha: string}
}
export const setCaptcha = (captcha: string): SetCaptchaType => ({type: GET_CAPTCHA, payload: {captcha}})

export const getAuthUserData = () => async (dispatch: any) => {
    dispatch(loading(true))
    let response = await authAPI.me()
    dispatch(loading(false))
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email: string, password: number, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if(response.data.resultCode === 10) {dispatch(getCaptchaURL())}
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const logout = () => async (dispatch:any) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaURL = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptcha()
    const captchaURL = response.data.url
        dispatch(setCaptcha(captchaURL))

}

export default authReducer;