import s from "./Users.module.css";
import React, {useEffect} from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType, getUsers} from "../../redux/Users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsersFilter,
    getUsersSelector
} from "../../redux/Users-selectors";

type PropsType = {}

export const Users: React.FC<PropsType> = () => {

    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const users = useSelector(getUsersSelector)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUsers(currentPage, pageSize, filter))
    },[])
    const onPageChanged = (Page: number) => {
        dispatch(getUsers(Page, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsers(1, pageSize, filter))
    }
    const follow = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }

    return (
        <div className={s.usersPage}>
            <UsersSearchForm onFilterChanged={onFilterChanged}/>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            <div>
                {users.map(u => <User key={u.id} user={u} followingInProgress={followingInProgress}
                                      unfollow={unfollow} follow={follow}/>)}
            </div>
        </div>
    )
}


