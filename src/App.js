import './App.css';
import React from 'react';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store from "./redux/store";
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
                               element={<Profile store = {props.store}/>}/>
                        <Route path="/dialogs/*"
                               element={<DialogsContainer store={props.store}/>}/>
                        <Route path='/news/*'
                               element={<NewsContainer store={props.store}/>}/>
                        <Route path='/settings/*'
                               element={<SettingsContainer store={props.store}
                               />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App


