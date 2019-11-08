import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {addPost, updateNewPostText} from "./Redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root'));

}




rerenderEntireTree(state);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

