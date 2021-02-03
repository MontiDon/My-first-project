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
                ...action.data,
                isAuth: true
            }
        case LOADING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login} })
export const loading = (isFetching) => ({type: LOADING, isFetching: isFetching})
export const getAuthUserData = () => (dispatch) => {
    dispatch(loading(true))
        authAPI.me().then(response => {
            dispatch(loading(false))
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login))
            }
        });
}

export default authReducer;