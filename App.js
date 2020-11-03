import React from 'react';
import './App.css';
import './components/Header/Header.module.css';
import './components/Nav/Nav.module.css';
import './components/Profile/Profile.module.css';
import './components/Dialogs/Dialogs.module.css'
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Weather from "./components/Weather/Weather";
import Settings from "./components/Settings/Settings";
import Translate from "./components/Translate/Translate";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                {/*<Profile/>*/}
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile'  render={ () => <Profile />}/>
                    <Route path='/news'  component={News}/>
                    <Route path='/Weather'  component={Weather}/>
                    <Route path='/Settings'  component={Settings}/>
                    <Route path='/Translate'  component={Translate}/>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;