import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import Weather from "./components/Weather/Weather";
import Settings from "./components/Settings/Settings";
import Translate from "./components/Translate/Translate";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Home from "./components/App-wrapper-content-page/App-wrapper-content-page";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Sitebar/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/App-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/Redux-store";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/friends' render={() => <FriendsContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/weather' render={() => <Weather/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/translate' render={() => <Translate/>}/>
                    <Route path='/home' render={() => <Home/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
        withRouter,
        connect(mapStateToProps, {initializeApp}))(App);

const MyApp = (props) => {
    return <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
}
export default MyApp