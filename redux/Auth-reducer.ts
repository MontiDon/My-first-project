import {ResultCode, ResultCodeCaptcha} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";
import {BaseThunkType, InferActionsTypes} from "./Redux-store";

let initialState = {
    userId: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    isFetching: true,
    captcha: null as string | null
};

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
        case 'GET_CAPTCHA':
            return {
                ...state,
                ...action.payload
            }
        case 'LOADING': {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'SET_USER_DATA', payload: {userId, email, login, isAuth} } as const),
    loading: (isFetching: boolean)=> ({type: 'LOADING', isFetching: isFetching} as const),
    setCaptcha: (captcha: string) => ({type: 'GET_CAPTCHA', payload: {captcha}} as const)
}
export const getAuthUserData = (): ThunkType => async (dispatch) => {
    dispatch(actions.loading(true))
    let data = await authAPI.me()
    dispatch(actions.loading(false))
    if (data.resultCode === ResultCode.Success) {
        let {id, email, login} = data.data;
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
}
export const login = (email: string, password: number, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (data.resultCode === ResultCodeCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaURL())
        }
        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const logout = (): ThunkType => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaURL = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptcha()
    const captchaURL = data.url
    dispatch(actions.setCaptcha(captchaURL))

}

export default authReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>