import React from "react";
import styles from "./FormsRedactor.module.css"
import {Field} from "redux-form";

export const Textarea = ({input, meta, ...props}) => {
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
export const Input = ({input, meta, ...props}) => {
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
export const createField = (placeholder, name, validators, component, props = {}, text = "") => {
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