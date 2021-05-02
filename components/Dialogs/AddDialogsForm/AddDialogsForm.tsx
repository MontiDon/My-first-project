import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField} from '../../Common/FormsRedactor/FormsRedactor'
import {Textarea} from "../../Common/FormsRedactor/FormsRedactor";
import {maxLength, required} from "../../../utilities/Validators/Validators";
import {NewMessageFormType} from "../Dialogs";
const maxLength55 = maxLength(55)

type PropsType = {}
const AddDialogsForm: React.FC<InjectedFormProps<NewMessageFormType, PropsType> & PropsType> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField('Enter your message', 'newMessageBody', [required, maxLength55], Textarea)}
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const AddDialogsFormRedux = reduxForm<NewMessageFormType>({
    form: 'dialogsAddMessageForm'})(AddDialogsForm)























