import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import Weather from "./components/Weather/Weather";
import Settings from "./components/Settings/Settings";
import Translate from "./components/Translate/Translate";
import {Route} from "react-router-dom";
import Home from "./components/App-wrapper-content-page/App-wrapper-content-page";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Sitebar/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?'  render={ () => <ProfileContainer />} />
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
    )
}
export default App;