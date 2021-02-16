import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Common/FormsRedactor/FormsRedactor";
import {maxLength, required} from "../../../utilities/Validators/Validators";

const maxLength5 = maxLength(5)

const AddDialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder='Enter your message' name="newMessageBody"
                       validate={[required, maxLength5]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const AddDialogsFormRedux = reduxForm({
    form: 'dialogsAddMessageForm'})(AddDialogsForm)























