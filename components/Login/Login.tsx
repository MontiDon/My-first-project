import React from "react";
import {LoginReduxForm} from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/Auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/Redux-store";

type MapStateToProps = {
    isAuth: boolean
    captcha: string | null
}
type MapDispatchToProps = {
    login: (email: string, password: number, rememberMe: boolean, captcha: string) => void
}
export type FormDataTypes = {
    email: string
    password: number
    rememberMe: boolean
    captcha: string
}
const Login: React.FC<MapStateToProps & MapDispatchToProps> = (props) => {
    const onSubmit = (formData: FormDataTypes) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
});

export default connect(mapStateToProps, {login})(Login)