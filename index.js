import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export let dialogs = [
    {id: 'dmitry', name: 'Dmitry'},
    {id: 'ilya', name: 'Ilya'},
    {id: 'artem', name: 'Artem'},
    {id: 'katya', name: 'Katya'},
    {id: 'nastya', name: 'Nastya'}
]

export let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'I`m fine'}
]

export let postData = [
    {id: 1, message: 'It`s my first post on react'},
    {id: 2, message: 'Eee boy!'}
]

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
