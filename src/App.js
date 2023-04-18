import './App.css';
import React from 'react';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NewsContainer from "./Components/News/NewsContainer";
import SettingsContainer from "./Components/Settings/SettingsContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="AppWrap">
                <Header />
                <Navbar />
                <div className='App-Wrap-container'>
                    <Routes>
                        <Route path="/profile"
                               element={<Profile />}/>
                        <Route path="/dialogs/*"
                               element={<DialogsContainer />}/>
                        <Route path='/news/*'
                               element={<NewsContainer />}/>
                        <Route path='/settings/*'
                               element={<SettingsContainer />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App


