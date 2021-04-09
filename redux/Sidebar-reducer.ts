export type InitialStateType = typeof initialState
let initialState = {
    friends: [
        {id: 'nastya', name: 'Nastya'},
        {id: 'katya', name: 'Katya'}
    ] as Array<{id: string, name: string}>
}

const sidebarReducer = (state = initialState, action: any): InitialStateType => {
    return state;
}


export default sidebarReducer;