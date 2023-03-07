import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let PostsData = [
    {id: 1, message: 'Hello, what is your number', LikesCount: 'Like ' + 12},
    {id: 2, message: 'Hello, I am not sure about that', LikesCount: 'Like ' + 11},

]
const DialogsData = [
    {id: 1, name: 'Movsar'},
    {id: 2, name: 'Ahmad'},
    {id: 3, name: 'Iman'},
    {id: 4, name: 'Bilal'},
    {id: 5, name: 'Lilia'},
]

const MessagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yep'},
    {id: 4, message: 'See you tomorrow'},
    {id: 5, message: 'Have a good meal!'},
]

root.render(
  <React.StrictMode>
    <App PostsData={PostsData} DialogsData={DialogsData} MessagesData={MessagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
