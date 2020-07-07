import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialog/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";

const App = (props) => {

  return (
      <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">


        <Route path='/dialog'   render = { () =><Dialogs dialogs={props.appState.dialogs} messages ={props.appState.messages}/>}/>
        <Route path= '/profile' render = { () => <Profile posts = {props.appState.posts}/>}/>
        <Route path= '/news' render ={ ()=> <News/>}/>
        <Route path= '/music' render ={ () => <Music/>}/>
        <Route path= '/settings' render = { ()=> <Settings/>}/>
    </div>
    </div>
      </BrowserRouter>  )

}
export default App;
