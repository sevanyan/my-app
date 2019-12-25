import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";
import {Provider} from "./StoreContext";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>

        </BrowserRouter>, document.getElementById("root"));
}


rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree()
});
