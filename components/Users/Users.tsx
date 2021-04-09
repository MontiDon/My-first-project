import s from "./Users.module.css";
import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import {UsersType} from "../../types/Types";

type Props = {
    currentPage: number
    onPageChanged: (userId: number) => void
    totalUsersCount: number
    pageSize: number
    users: Array<UsersType>
    isFetching: boolean
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}
const Users: React.FC<Props> = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, isFetching, ...props}) => {
    return (
        <div className={s.usersPage}>

            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize}/>

            <h2>Users</h2>

            {users.map(u => <User key={u.id} user={u} followingInProgress={props.followingInProgress}
                                  unfollow={props.unfollow} follow={props.follow}/>)}
        </div>
    )
}

export default Users;

