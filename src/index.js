import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state}
                 dialogsAddPost={store.dialogsAddPost.bind(store)}
                 settingsAddPost={store.settingsAddPost.bind(store)}
                 addPostNewsElement={store.addPostNewsElement.bind(store)}
                 addPostElement={store.addPostElement.bind(store)}
                 updateOnPostChange={store.updateOnPostChange.bind(store)}
            />
        </React.StrictMode>
    );
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)

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
