import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Weather from "./components/Weather/Weather";
import Settings from "./components/Settings/Settings";
import Translate from "./components/Translate/Translate";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/App-wrapper-content-page/App-wrapper-content-page";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Sitebar/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'  render={ () => <Profile />} />
                    <Route path='/dialogs'  render={ () => <DialogsContainer />} />
                    <Route path='/users'  render={ () => <UsersContainer />} />
                    <Route path='/friends'  render={ () => <FriendsContainer />} />
                    <Route path='/news'  render={ () => <News />}/>
                    <Route path='/weather'  render={ () => <Weather />}/>
                    <Route path='/settings'  render={ () => <Settings />}/>
                    <Route path='/translate'  render={ () => <Translate />}/>
                    <Route path='/home'  render={ () => <Home />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;