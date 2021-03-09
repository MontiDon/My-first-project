import s from "./Users.module.css";
import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
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

