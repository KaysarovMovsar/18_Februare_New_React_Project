import './App.css';
import React from 'react';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="AppWrap">
                <Header />
                <Navbar />
                <div className='App-Wrap-container'>
                    <Routes>
                        <Route path="/profile"
                               element={<Profile state={props.state.profilePage}
                                                 addPost={props.addPost}
                                                 updateNewPostText={props.updateNewPostText}/>}/>
                        <Route path="/dialogs/*"
                               element={<Dialogs state={props.state.dialogPage}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App


