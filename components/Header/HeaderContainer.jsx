import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/Auth-reducer";
import {loading} from "../../redux/Auth-reducer"
import Preloader from "../Common/Preloader/Preloader";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.loading(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                this.props.loading(false);

                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Header {...this.props} />
        </>
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
});

export default connect(mapStateToProps, {setAuthUserData, loading}) (HeaderContainer);