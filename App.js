import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Weather from "./components/Weather/Weather";
import Settings from "./components/Settings/Settings";
import Translate from "./components/Translate/Translate";
import Friends from "./components/Sitebar/Friends/Friends";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'  render={ () => <Dialogs dialogsPage={props.state.dialogsPage} />}/>
                    <Route path='/profile'  render={ () => <Profile profilePage={props.state.profilePage}/>}/>
                    <Route path='/friends'  render={ () => <Friends sidebar={props.state.sidebar}/>}/>
                    <Route path='/news'  render={ () => <News />}/>
                    <Route path='/weather'  render={ () => <Weather />}/>
                    <Route path='/settings'  render={ () => <Settings />}/>
                    <Route path='/translate'  render={ () => <Translate />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;