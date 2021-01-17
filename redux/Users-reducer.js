const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SetUsers = 'SET-USERS';
const SetCurrentPage = 'SET-CURRENT-PAGE';
const SetTotalUsersCount = 'SET-TOTAL-USERS-COUNT';
const Loading = 'LOADING';

let initialState = {
    users: [ ],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
        default:
            return state;
    }
}




export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SetUsers, users})
export const setCurrentPage = (currentPage) => ({type: SetCurrentPage, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SetTotalUsersCount, count: totalUsersCount})
export const loading = (isFetching) => ({type: Loading, isFetching: isFetching})

export default usersReducer;