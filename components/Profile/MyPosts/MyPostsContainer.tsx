import {actions} from "../../../redux/Profile-reducer";
import MyPosts, {DispatchPropsType, MapPropsType} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/Redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts
    }

}

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
    addPost: actions.addProfilePostActionCreator})(MyPosts)
export default MyPostsContainer
