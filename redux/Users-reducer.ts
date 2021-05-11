import {updateObjectInArray} from "../utilities/Bll";
import {UsersType} from "../types/Types";
import {BaseThunkType, InferActionsTypes} from "./Redux-store";
import {Dispatch} from "redux";
import {userAPI} from "../api/users-api";

let initialState = {
    users: [ ] as Array<UsersType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
    filter: {
        term: '',
        friend: null as null | boolean
    }
}

const usersReducer = (state = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case "SetUsers": {
            return {...state, users: action.users}
        }
        case "SetCurrentPage": {
            return {...state, currentPage: action.currentPage}
        }
        case "SetTotalUsersCount": {
            return {...state, totalUsersCount: action.count}
        }
        case "Loading": {
            return {...state, isFetching: action.isFetching}
        }
        case "SetFilter": {
            return {...state, filter: action.payload}
        }
        case "TOGGLE_IS_FOLLOWING_PROGRESS": {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}
export const actions = {
    followSuccess: (userId: number) => ({type: 'FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
    setUsers: (users: Array<UsersType>) => ({type: 'SetUsers', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SetCurrentPage', currentPage} as const),
    setFilter: (filter: FilterType) => ({type: 'SetFilter', payload: filter} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({type: 'SetTotalUsersCount', count: totalUsersCount} as const),
    loading: (isFetching: boolean) => ({type: 'Loading', isFetching: isFetching} as const),
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => ({type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId} as const)

}
export const getUsers = (Page: number, pageSize: number, filter: FilterType): ThunkType => {
    return async (dispatch: DispatchType) => {

        dispatch(actions.loading(true))
        dispatch(actions.setCurrentPage(Page))
        dispatch(actions.setFilter(filter))
        let data = await userAPI.getUsers(Page, pageSize, filter.term, filter.friend)

        dispatch(actions.loading(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
    }
}
const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: (userId: number) => ActionTypes) => {

    dispatch(actions.toggleFollowingInProgress(true, userId));
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleFollowingInProgress(false, userId));
}
export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), actions.followSuccess)
    }
}
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), actions.unfollowSuccess)
    }
}

export default usersReducer;


type DispatchType = Dispatch<ActionTypes>
type ThunkType = BaseThunkType<ActionTypes>
type ActionTypes = InferActionsTypes<typeof actions>
export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter