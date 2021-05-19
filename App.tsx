import React, {Suspense} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter, Link, Route, withRouter} from "react-router-dom";
import Home from "./components/App-wrapper-content-page/App-wrapper-content-page";
import {UsersPage} from "./components/Users/UsersContainer";
import {LoginPage} from "./components/Login/LoginPage";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/App-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store, {AppStateType} from "./redux/Redux-store";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Breadcrumb, Layout, Menu} from 'antd';
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import {Header} from "./components/Header/Header";

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;
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
            <Layout>
                <Header/>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item><Link to="/home">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['7']}
                                /*defaultOpenKeys={['sub1']}*/
                                style={{ height: '100%' }}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined />} title="Profile">
                                    <Menu.Item key="1"><Link to="/profile">Profile</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to="/dialogs">Dialogs</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Developers">
                                    <Menu.Item key="5"><Menu.Item key="2"><Link to="/developers">Developers</Link></Menu.Item></Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined />} title="Dialogs">
                                    <Menu.Item key="9"><Link to="/dialogs">Dialogs</Link></Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            </Suspense>
                            <Route path='/developers' render={() => <UsersPage pageTitle={'Students'}/>}/>
                            <Route path='/home' render={() => <Home/>}/>
                            <Route path='/login' render={() => <LoginPage/>}/>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Design ©2021</Footer>
            </Layout>

            /*<div className='app-wrapper'>
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
            </div>*/
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