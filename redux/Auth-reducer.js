import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const LOADING = 'LOADING'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
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
export const getAuthUserData = () => (dispatch) => {
    dispatch(loading(true))
        authAPI.me().then(response => {
            dispatch(loading(false))
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        });
}
export const login = (email, password, rememberMe) => (dispatch) => {
        authAPI.login(email, password, rememberMe, true).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
            if (response.data.resultCode === 10) {
                alert('Captcha')
            }
        });
}
export const logout = () => (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
}

export default authReducer;