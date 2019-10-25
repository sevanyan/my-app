import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi, how are You?', likesCount: 1245649411},
    {id: 2, message: 'It\'s my first post', likesCount: 1152454},
]

let dialogs = [
    {id: 1, name: 'Artak'},
    {id: 2, name: 'Vazgen'},
    {id: 3, name: 'Anna'},
    {id: 4, name: 'Vika'},
    {id: 5, name: 'Milena'},
    {id: 6, name: 'Seroj'}]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your Internship?'},
    {id: 3, message: 'I`m shure that everething is Ok!'},
    {id: 4, message: 'How are You?'},
    {id: 5, message: 'Call me please'},
    {id: 6, message: 'You are my best friend'}]
ReactDOM.render(<App posts={posts} messages = {messages} dialogs  = {dialogs}/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
