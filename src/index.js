import React from 'react';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from "./rerender";
import state from "./redux/state";

rerenderEntireTree(state);

reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App state={state}
         dialogsAddPost={dialogsAddPost}
         settingsAddPost={settingsAddPost}
         addPostElement={addPostElement}/>
  </React.StrictMode>
);

import {rerenderEntireTree} from "./render";
import state from "./redux/state";




rerenderEntireTree(state)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
