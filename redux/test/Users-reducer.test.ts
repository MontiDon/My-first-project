import usersReducer, {actions, InitialStateType} from "../Users-reducer";

let state: InitialStateType;
beforeEach(() => {
    state = {
        users: [
            {id: 0, followed: false, name: 'Dmitry 0', photos:
                    {large: null, small: null}, status: 'Status 0'},
            {id: 1, followed: false, name: 'Dmitry 1', photos:
                    {large: null, small: null}, status: 'Status 1'},
            {id: 2, followed: true, name: 'Dmitry 2', photos:
                    {large: null, small: null}, status: 'Status 2'},
            {id: 3, followed: true, name: 'Dmitry 3', photos:
                    {large: null, small: null}, status: 'Status 3'}
        ],
        pageSize: 4,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    }
})

test('follow success', () => {
    //state
    //action
    //expect
    const newState = usersReducer(state,  actions.followSuccess(1))
    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})
test('unfollow success', () => {
    //state
    //action
    //expect
    const newState = usersReducer(state,  actions.unfollowSuccess(3))
    expect(newState.users[2].followed).toBeTruthy()
    expect(newState.users[3].followed).toBeFalsy()
})