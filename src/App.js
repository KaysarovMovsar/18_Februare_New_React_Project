import './App.css';
import React from 'react';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";


const App = () => {
    return (
        <div className="AppWrap">
            <Header />
            <Navbar />
            <div className='App-Wrap-container'>
                <Profile />
                {/*<Dialogs />*/}
            </div>

        </div>
    );
}

export default App;
