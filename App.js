import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Weather from "./components/Weather/Weather";
import Settings from "./components/Settings/Settings";
import Translate from "./components/Translate/Translate";
import Friends from "./components/Sitebar/Friends/Friends";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/App-wrapper-content-page/App-wrapper-content-page";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'  render={ () => <Profile store={props.store}/>} />

                    <Route path='/dialogs'  render={ () => <DialogsContainer store={props.store}/>} />

                    <Route path='/friends'  render={ () => <Friends sidebar={props.state.sidebar}/>} />
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