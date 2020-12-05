const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SetUsers = 'SET-USERS';

let initialState = {
    users: [/*
        {id: 1, followed: true, fullName: 'Dmitry', status: 'Big boss', location: {city:'Moscow', country:'Russia'},
            userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeKZbcVtvtJKKvj5jnN11zgX82gll4TsnmFg&usqp=CAU',},

        {id: 2, followed: true, fullName: 'Ilya', status: 'I`m a good man', location: {city:'Moscow', country:'Russia'},
            userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeKZbcVtvtJKKvj5jnN11zgX82gll4TsnmFg&usqp=CAU'},

        {id: 3, followed: false, fullName: 'Artem', status: 'Hi, let`s meet', location: {city:'Moscow', country:'Russia'},
            userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeKZbcVtvtJKKvj5jnN11zgX82gll4TsnmFg&usqp=CAU'},

        {id: 4, followed: false, fullName: 'Katya', status: 'I like instagram', location: {city:'Kiev', country:'Ukraine'},
            userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeKZbcVtvtJKKvj5jnN11zgX82gll4TsnmFg&usqp=CAU'},

        {id: 5, followed: true, fullName: 'Nastya', status: 'Just do it!', location: {city:'Tokyo', country:'Japan'},
            userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeKZbcVtvtJKKvj5jnN11zgX82gll4TsnmFg&usqp=CAU'}
    */]
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
            return { ...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}




export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SetUsers, users})

export default usersReducer;