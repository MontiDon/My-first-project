import s from "./Users.module.css";
import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import {UsersType} from "../../types/Types";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType} from "../../redux/Users-reducer";


type Props = {
    currentPage: number
    onPageChanged: (userId: number) => void
    onFilterChanged: (filter: FilterType) => void
    totalUsersCount: number
    pageSize: number
    users: Array<UsersType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}
const Users: React.FC<Props> = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return (
        <div className={s.usersPage}>
            <UsersSearchForm onFilterChanged={props.onFilterChanged}/>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            <div>
                {users.map(u => <User key={u.id} user={u} followingInProgress={props.followingInProgress}
                                      unfollow={props.unfollow} follow={props.follow}/>)}
            </div>
        </div>
    )
}

export default Users;

