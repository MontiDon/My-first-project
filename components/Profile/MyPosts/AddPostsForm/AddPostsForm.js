import {maxLength} from "../../../../utilities/Validators/Validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../Common/FormsRedactor/FormsRedactor";
import React from "react";

const maxLength5 = maxLength(5)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} component={Textarea} type="text" validate={[maxLength5]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
export const PostFormRedux = reduxForm({
    form: 'ProfileAddNewPostFrom'})(AddNewPostForm)