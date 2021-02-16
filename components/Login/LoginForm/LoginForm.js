import {Field, reduxForm} from "redux-form";
import {Input} from "../../Common/FormsRedactor/FormsRedactor";
import {maxLength, minLength, required} from "../../../utilities/Validators/Validators";
import React from "react";

const maxLength15 = maxLength(15)
const minLength6 = minLength(6)

const LoginForm = (props) => {
    const {handleSubmit, pristine, reset, submitting} = props
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={'login'} component={Input} placeholder={'Login'} validate={[required, maxLength15]}/>
            </div>
            <div>
                <Field name={'password'} component={Input} placeholder={'Password'} validate={[required, minLength6]}/>
            </div>
            <spam>
                <Field name={'rememberMe'} component={Input} type="checkbox"/>Remember me
            </spam>
            <div>
                <button type="submit">Login</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)



















/*const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} component={Input} placeholder={'Login'} validate={[required, maxLength15]}/>
            </div>
            <div>
                <Field name={'password'} component={Input} placeholder={'Password'} validate={[required, maxLength15]}/>
            </div>
            <spam>
                <Field name={'rememberMe'} component={Input} type="checkbox"/>Remember me
            </spam>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}*/

