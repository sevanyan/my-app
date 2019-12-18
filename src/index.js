import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";
import StoreContext from "./StoreContext";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
            <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Privider>
        </BrowserRouter>, document.getElementById('root'));

}
rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
}





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

