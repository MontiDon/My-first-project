import React from "react";
import styles from "./FormsRedactor.module.css"
import {Field} from "redux-form";
import {ValidatorsType} from "../../../utilities/Validators/Validators";

type FCType = (data: { input: () => void, meta: { touched: boolean, error: string } }) => void
export const Textarea: FCType = ({input, meta, ...props}) => {
    let showError = meta.touched && meta.error
    return(
        <div className={styles.formRedactor + " " + (showError ? styles.error: '')}>
            <div>
                <textarea {...input} {...props} />
            </div>
            { showError && <span>{meta.error}</span> }
        </div>
    )
}
export const Input: FCType = ({input, meta, ...props}) => {
    let showError = meta.touched && meta.error
    return(
        <div className={styles.formRedactor + " " + (showError ? styles.error: '')}>
            <div>
                <input {...input} {...props} />
            </div>
            { showError && <span>{meta.error}</span> }
        </div>
    )
}

export const createField = (placeholder: string, name: string, validators: Array<ValidatorsType>,
                            component: FCType,
                            props = {}, text = "") => {
    return (
    <span>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </span>
    )
}