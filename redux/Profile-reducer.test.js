import React from "react";
import profileReducer, {addProfilePostActionCreator, deletePost} from "./Profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'It`s my first post on React'},
        {id: 2, message: 'Eee boy!'}
    ]
}

it('Length posts', () => {
    let action = addProfilePostActionCreator('Privet Dmitrij')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
})

it('add new post', () => {
    let action = addProfilePostActionCreator("Privet Dmitrij")
    let newState = profileReducer(state, action)
    expect(newState.posts[0].message).toBe('Privet Dmitrij')
})

it('delete post', () => {
    let action = deletePost(3)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
})