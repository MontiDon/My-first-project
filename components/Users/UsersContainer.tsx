import React from 'react';
import {useSelector} from 'react-redux';
import Preloader from "../Common/Preloader/Preloader";
import {getIsFetching} from "../../redux/Users-selectors";
import {Users} from "./Users";

type UsersPagePropsType = {
    pageTitle: string
}
export const UsersPage: React.FC<UsersPagePropsType> = (props) => {
    const isFetching = useSelector(getIsFetching)
    return <>
        {isFetching ? <Preloader/> : null}
        <h2>{props.pageTitle}</h2>
        <Users/>
    </>
}
