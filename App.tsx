import React, {Suspense} from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Home from "./components/App-wrapper-content-page/App-wrapper-content-page";
import {UsersPage} from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {LoginPage} from "./components/Login/LoginPage";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/App-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store, {AppStateType} from "./redux/Redux-store";
import ProfileContainer from "./components/Profile/ProfileContainer";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')); // подгружает страничку(компоненту) только при нажатии

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {

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
                    <Suspense fallback={<div>Loading...</div>}>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    </Suspense>
                    <Route path='/users' render={() => <UsersPage pageTitle={'Students'}/>}/>
                    <Route path='/home' render={() => <Home/>}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

let AppContainer = compose<React.ComponentType>(
        withRouter,
        connect(mapStateToProps, {initializeApp}))(App);

const MyApp: React.FC = () => {
    return <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
}
export default MyApp