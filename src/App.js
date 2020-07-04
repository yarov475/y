import React, { Component } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialog from "./components/Dialog/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {

  return (
      <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">

<Route path='/dialog' component = {Dialog}/>
<Route path= '/profile' component={Profile}/>
    </div>
    </div>
      </BrowserRouter>  )

}


export default App;
