import './App.css';
import React from 'react';
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";

const App = () => {
    return (
        <div className="AppWrap">
            <Header />
            <Navbar />
            <Profile />
        </div>
    );
}

export default App;
