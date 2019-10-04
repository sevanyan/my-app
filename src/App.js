import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <Technologies />
        </div>);
}
export default App;


const Technologies = () => {
    return ( <div>
        <a href="#s">Home</a>
        <a href="#s">News</a>
        <a href="#s">Messeges</a>
    </div>
    );
}

const Header = () => {
    return ( <div>
            <a href="#s">Home</a>
            <a href="#s">News</a>
            <a href="#s">Messeges</a>

        </div>

    );
}