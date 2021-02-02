import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SetUsers = 'SET-USERS';
const SetCurrentPage = 'SET-CURRENT-PAGE';
const SetTotalUsersCount = 'SET-TOTAL-USERS-COUNT';
const Loading = 'LOADING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [ ],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SetUsers: {
            return { ...state, users: action.users}
        }
        case SetCurrentPage: {
            return { ...state, currentPage: action.currentPage}
        }
        case SetTotalUsersCount: {
            return { ...state, totalUsersCount: action.count}
        }
        case Loading: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}




export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SetUsers, users})
export const setCurrentPage = (currentPage) => ({type: SetCurrentPage, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SetTotalUsersCount, count: totalUsersCount})
export const loading = (isFetching) => ({type: Loading, isFetching: isFetching})
export const toggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {

        dispatch(loading(true))

        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(loading(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const follow = (userId) => {

    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId));
        userAPI.follow(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId));
            });
    }
}

export const unfollow = (userId) => {

    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId));
        userAPI.unfollow(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId));
            });
    }
}


export default usersReducer;