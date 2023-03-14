import './App.css';
import React from 'react';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {addPostElement, settingsAddPost} from "./redux/state";


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
                                                 addPostElement={props.addPostElement}/>}/>
                        <Route path="/dialogs/*"
                               element={<Dialogs state={props.state.dialogPage}
                                                 dialogsAddPost={props.dialogsAddPost}/>}/>
                        <Route path='/news/*'
                               element={<News state={props.state.dialogPage}
                                              addPostNewsElement={props.addPostNewsElement}/>}/>
                        <Route path='/settings/*'
                               element={<Settings settingsAddPost={props.settingsAddPost}
                                                  state={props.state.dialogPage}
                               />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App


