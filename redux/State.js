import React from 'react';
import {rerenderEntireTree} from "../Render";

let state = {

    dialogsPage: {
        dialogs: [
            {id: 'dmitry', name: 'Dmitry'},
            {id: 'ilya', name: 'Ilya'},
            {id: 'artem', name: 'Artem'},
            {id: 'katya', name: 'Katya'},
            {id: 'nastya', name: 'Nastya'}
        ],

        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'I`m fine'}
        ],
        newMessage: ''
    },
    profilePage: {
        posts: [
            {id: 1, message: 'It`s my first post on React'},
            {id: 2, message: 'Eee boy!'}
        ],
        newPostText: ''
    },

    sidebar: {
        friends: [
            {id: 'nastya', name: 'Nastya' },
            {id: 'katya', name: 'Katya' }
        ]
    }
}

export let addMessage = (postMessage) => {
    let newMessage = {
        id: 4,
        message: postMessage
    }
    state.dialogsPage.messages.push(newMessage);
    rerenderEntireTree(state);
}

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText
    }

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let updateMessageElement = (newText) => {
    state.dialogsPage.newMessage = newText;
    rerenderEntireTree(state);
}




export default state;
