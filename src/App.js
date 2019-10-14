import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MyPosts from './components/Profile/MyPosts/Posts/MyPosts';


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <MyPosts/>

        </div>);
}
export default App;

