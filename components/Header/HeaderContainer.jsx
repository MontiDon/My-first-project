import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/Auth-reducer";
import Preloader from "../Common/Preloader/Preloader";


class HeaderContainer extends React.Component {


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

export default connect(mapStateToProps, {logout}) (HeaderContainer);