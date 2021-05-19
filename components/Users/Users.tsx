import s from "./Users.module.css";
import React, {useEffect} from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType, getUsers, follow, unfollow} from "../../redux/Users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsersFilter,
    getUsersSelector
} from "../../redux/Users-selectors";
import { useHistory } from "react-router-dom";
import * as queryString from "querystring";

type PropsType = {}
type QueryParamsType = { term?: string; page?: string; friend?: string }
export const Users: React.FC<PropsType> = () => {

    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const users = useSelector(getUsersSelector)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType

        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)


        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}

        switch(parsed.friend) {
            case "null":
                actualFilter = {...actualFilter, friend: null}
                break;
            case "true":
                actualFilter = {...actualFilter, friend: true}
                break;
            case "false":
                actualFilter = {...actualFilter, friend: false}
                break;
        }

        dispatch(getUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
        const query: QueryParamsType = {}

        if (!!filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)

        history.push({
            pathname: '/developers',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])

    const onPageChanged = (page: number) => {
        dispatch(getUsers(page, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsers(1, pageSize, filter))
    }
    const _follow = (userId: number) => {
        dispatch(follow(userId))
    }
    const _unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }

    return (
        <div className={s.usersPage}>
            <UsersSearchForm onFilterChanged={onFilterChanged}/>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            <div>
                {users.map(u => <User key={u.id} user={u} followingInProgress={followingInProgress}
                                      unfollow={_unfollow} follow={_follow}/>)}
            </div>
        </div>
    )
}


