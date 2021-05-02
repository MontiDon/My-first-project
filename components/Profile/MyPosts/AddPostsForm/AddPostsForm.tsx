import {maxLength} from "../../../../utilities/Validators/Validators";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Textarea} from "../../../Common/FormsRedactor/FormsRedactor";
import React from "react";
import {AddPostFormValuesType} from "../MyPosts";

const maxLength5 = maxLength(30)
type PropsType = {

}

const AddNewPostForm: React.FC<InjectedFormProps<AddPostFormValuesType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField('Enter your post', 'newPostText', [maxLength5], Textarea)}
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
export const PostFormRedux = reduxForm<AddPostFormValuesType, PropsType>({
    form: 'ProfileAddNewPostFrom'})(AddNewPostForm)