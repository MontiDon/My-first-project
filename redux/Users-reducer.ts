import {userAPI} from "../api/api";
import {updateObjectInArray} from "../utilities/Bll";
import {UsersType} from "../types/Types";
import {AppStateType} from "./Redux-store";
import { Dispatch } from "redux";
import {ThunkAction} from "redux-thunk";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SetUsers = 'SET-USERS';
const SetCurrentPage = 'SET-CURRENT-PAGE';
const SetTotalUsersCount = 'SET-TOTAL-USERS-COUNT';
const Loading = 'LOADING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

type InitialStateType = typeof initialState
let initialState = {
    users: [ ] as Array<UsersType>,
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
}

const usersReducer = (state = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case SetUsers: {
            return {...state, users: action.users}
        }
        case SetCurrentPage: {
            return {...state, currentPage: action.currentPage}
        }
        case SetTotalUsersCount: {
            return {...state, totalUsersCount: action.count}
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

type ActionTypes = FollowSuccessType | UnfollowSuccessType| SetUsersType | SetCurrentPageType | SetTotalUsersCountType | LoadingType |
    ToggleFollowingInProgressType

type FollowSuccessType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessType => ({type: FOLLOW, userId})
type UnfollowSuccessType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessType => ({type: UNFOLLOW, userId})
type SetUsersType = {
    type: typeof SetUsers
    users: Array<UsersType>
}
export const setUsers = (users: Array<UsersType>): SetUsersType => ({type: SetUsers, users})
type SetCurrentPageType = {
    type: typeof SetCurrentPage
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SetCurrentPage, currentPage})
type SetTotalUsersCountType = {
    type: typeof SetTotalUsersCount
    count: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountType => ({type: SetTotalUsersCount, count: totalUsersCount})
type LoadingType = {
    type: typeof Loading
    isFetching: boolean
}
export const loading = (isFetching: boolean): LoadingType => ({type: Loading, isFetching: isFetching})
type ToggleFollowingInProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleFollowingInProgress = (isFetching: boolean, userId: number): ToggleFollowingInProgressType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>
export const getUsers = (Page: number, pageSize: number): ThunkType => {
    return async (dispatch: DispatchType, getState: GetStateType) => {

        dispatch(loading(true))
        dispatch(setCurrentPage(Page))

        let data = await userAPI.getUsers(Page, pageSize)

        dispatch(loading(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: (userId: number) => FollowSuccessType | UnfollowSuccessType) => {

    dispatch(toggleFollowingInProgress(true, userId));
    let data = await apiMethod(userId)
    if (data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId));
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), followSuccess)
    }
}

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), unfollowSuccess)
    }
}


export default usersReducer;