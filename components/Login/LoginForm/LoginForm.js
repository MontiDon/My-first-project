import {Field, reduxForm} from "redux-form";
import {Input} from "../../Common/FormsRedactor/FormsRedactor";
import {maxLength, minLength, required} from "../../../utilities/Validators/Validators";
import React from "react";

const maxLength30 = maxLength(30)
const minLength6 = minLength(6)

const LoginForm = (props) => {
    const {handleSubmit, pristine, reset, submitting} = props
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={'email'} component={Input} placeholder={'Email'} validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field name={'password'} component={Input} placeholder={'Password'} validate={[required, minLength6]} type={'password'}/>
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

















