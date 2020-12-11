const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SetUsers = 'SET-USERS';
const SetCurrentPage = 'SET-CURRENT-PAGE';
const setTotalUsersCount = 'SET-TOTAL-USERS-COUNT';

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 1,
    currentPage: 1
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
        case setTotalUsersCount: {
            return { ...state, totalUsersCount: action.count}
        }
        default:
            return state;
    }
}




export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SetUsers, users})
export const setCurrentPageAC = (currentPage) => ({type: SetCurrentPage, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: setTotalUsersCount, count: totalUsersCount})

export default usersReducer;