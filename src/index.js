import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let posts=[
    {id:1, message:"how are you?", likesCount:12},
    {id:2, message:"helo Frirnd!!!", likesCount:15},
    {id:3, message:"helo Frirnds!!!", likesCount:15}
]
let messages  =
    [
        {id:1, message:"hi, guy!!!!!"},
        {id:2, message:"Coool"}
    ]

let dialogs = [
    {id:1,name:'Dima'} ,
    {id:2,name:'Sacha'}
];

ReactDOM.render(
  <React.StrictMode>


    <App  posts = {posts} dialogs={dialogs} messages={messages}/>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
