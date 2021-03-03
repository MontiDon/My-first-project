import {createSelector} from "reselect";


const getUsers = (state) => {
    return state.usersPage.users
}
export const getUsersSelector = createSelector(getUsers, (users) => {
    return users
})
const getPageSizeSelector = (state) => {
    return state.usersPage.pageSize
}
export const getPageSize = createSelector(getPageSizeSelector, (pageSize) => {
    return pageSize
})
const getTotalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount
}
export const getTotalUsersCount = createSelector(getTotalUsersCountSelector, (totalUsersCount) => {
    return totalUsersCount
})
const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage
}
export const getCurrentPage = createSelector(getCurrentPageSelector, (currentPage) => {
    return currentPage
})
const getIsFetchingSelector = (state) => {
    return state.usersPage.isFetching
}
export const getIsFetching = createSelector(getIsFetchingSelector, (isFetching) => {
    return isFetching
})
const getFollowingInProgressSelector = (state) => {
    return state.usersPage.followingInProgress
}
export const getFollowingInProgress = createSelector(getFollowingInProgressSelector, (followingInProgress) => {
    return followingInProgress
})