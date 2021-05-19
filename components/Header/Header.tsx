import React from 'react';
import {Link} from "react-router-dom";
import {Avatar, Button, Col, Layout, Menu, Row} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/Redux-store";
import {selectIsAuth} from "../../redux/Auth-selectors";
import {logout} from "../../redux/Auth-reducer";

export const Header: React.FC = () => {

    const isAuth = useSelector(selectIsAuth)
    const login = useSelector((state: AppStateType) => state.auth.login)

    const dispatch = useDispatch()
    const _logout = () => {
        dispatch(logout())
    }

    const {Header} = Layout;
    return (
        <Header className="header">
            <Row>
                <Col span={19}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1"><Link to="/developers">Developers</Link></Menu.Item>
                    </Menu>
                </Col>
                <Col span={5}>
                    {isAuth
                        ? <div>
                            <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                            <span style={{color: 'white'}}>{login} </span><Button onClick={_logout}>Log out</Button>
                        </div>
                        : <Link to={'/login'}>Login</Link>}
                </Col>
            </Row>
        </Header>
    )
}

/*        <header className={s.header}>
            <div>
                <NavLink to={'/home'}>
                    <img
                        src='https://st3.depositphotos.com/4035913/14685/v/450/depositphotos_146856205-stock-illustration-rs-letter-logo-design-with.jpg'
                        alt={''}/>
                </NavLink>
            </div>
            <div className={s.headerHead}>
                <h1>
                    <NavLink to='/home' className={s.headerName}>It`s my first project on React</NavLink>
                </h1>
                <div className={s.loginBlock}>
                    {props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>*/
