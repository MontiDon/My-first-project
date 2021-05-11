import {createSelector} from "reselect";
import {AppStateType} from "./Redux-store";


const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}
export const getUsersSelector = createSelector(getUsers, (users) => {
    return users
})
const getPageSizeSelector = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getPageSize = createSelector(getPageSizeSelector, (pageSize) => {
    return pageSize
})
const getTotalUsersCountSelector = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getTotalUsersCount = createSelector(getTotalUsersCountSelector, (totalUsersCount) => {
    return totalUsersCount
})
const getCurrentPageSelector = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getCurrentPage = createSelector(getCurrentPageSelector, (currentPage) => {
    return currentPage
})
const getIsFetchingSelector = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getIsFetching = createSelector(getIsFetchingSelector, (isFetching) => {
    return isFetching
})
const getFollowingInProgressSelector = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}
export const getFollowingInProgress = createSelector(getFollowingInProgressSelector, (followingInProgress) => {
    return followingInProgress
})
export const getUsersFilter = (state: AppStateType) => {
    return state.usersPage.filter
}