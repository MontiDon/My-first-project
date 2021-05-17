import React from "react";
import {LoginReduxForm} from "./LoginForm/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/Auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/Redux-store";


export type FormDataTypes = {
    email: string
    password: number
    rememberMe: boolean
    captcha: string
}
export const LoginPage: React.FC = () => {
    const captcha = useSelector((state: AppStateType) => state.auth.captcha)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (formData: FormDataTypes) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captcha={captcha}/>
        </div>
    )
}
