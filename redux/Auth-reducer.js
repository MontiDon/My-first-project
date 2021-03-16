import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const LOADING = 'LOADING'
const GET_CAPTCHA = 'GET_CAPTCHA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true,
    captcha: null
};

const authReducer = (state = initialState, action) => {
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

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth} })
export const loading = (isFetching) => ({type: LOADING, isFetching: isFetching})
export const setCaptcha = (captcha) => ({type: GET_CAPTCHA, payload: {captcha}})
export const getAuthUserData = () => async (dispatch) => {
    dispatch(loading(true))
    let response = await authAPI.me()
    dispatch(loading(false))
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if(response.data.resultCode === 10) {dispatch(getCaptchaURL())}
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaURL = () => async (dispatch) => {
    const response = await securityAPI.getCaptcha()
    const captchaURL = response.data.url
        dispatch(setCaptcha(captchaURL))

}

export default authReducer;