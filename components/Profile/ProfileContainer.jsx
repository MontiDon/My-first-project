import React from 'react';
import Profile from "./Profile";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/Profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import {compose} from "redux";


class ProfileContainer extends React.Component {

    getUserProfileAndStatus = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.getUserProfileAndStatus()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.match.params.userId != prevProps.match.params.userId)
        this.getUserProfileAndStatus()
        if (this.props.isAuth != prevProps.isAuth)
            this.getUserProfileAndStatus() //fix необходимо редактировать
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     isOwner={!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter
    ) (ProfileContainer);