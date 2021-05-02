import React from 'react';
import Header, {DispatchPropsType, MapPropsType} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/Auth-reducer";
import Preloader from "../Common/Preloader/Preloader";
import {AppStateType} from "../../redux/Redux-store";

type OwnProps = {
    isFetching?: boolean
}
class HeaderContainer extends React.Component<MapPropsType & OwnProps & DispatchPropsType> {
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Header {...this.props} />
        </>
    }
}
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
});

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {logout}) (HeaderContainer);