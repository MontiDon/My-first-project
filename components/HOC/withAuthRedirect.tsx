import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

type OwnProps = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: any) => ({
    isAuth: state.auth.isAuth
});

export function withAuthRedirect<WCP> (Component: React.ComponentType<WCP>) {
    function RedirectComponent(props: WCP & OwnProps) {
        if (!props.isAuth) return <Redirect to={'login'}/>
        return <Component {...props} />
    }

    let ConnectedAuthRedirectComponent = connect<any>(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}
