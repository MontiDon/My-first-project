import React from 'react';
import {connect} from 'react-redux';
import {getUsers, unfollow, follow, FilterType} from "../../redux/Users-reducer";
import Users from './Users';
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsersFilter,
    getUsersSelector
} from "../../redux/Users-selectors";
import {UsersType} from "../../types/Types";
import {AppStateType} from "../../redux/Redux-store";

type MapStateToPropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UsersType>
    followingInProgress: Array<number>
    filter: FilterType
}
type MapDispatchToProps = {
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}
type OwnProps = {
    pageTitle: string
}

type Props = MapStateToPropsType & MapDispatchToProps & OwnProps

class UsersContainer extends React.Component<Props> {

    componentDidMount() {
        let {currentPage, pageSize, filter} = this.props
        this.props.getUsers(currentPage, pageSize, filter)
    }

    onPageChanged = (Page: number) => {
        let {pageSize, filter} = this.props
        this.props.getUsers(Page, pageSize, filter)
    }

    onFilterChanged = (filter: FilterType) => {
        const {pageSize} = this.props
        this.props.getUsers(1, pageSize, filter)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> :
                <>
                    <h2>{this.props.pageTitle}</h2>
                    <Users totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           onPageChanged={this.onPageChanged}
                           onFilterChanged={this.onFilterChanged}
                           users={this.props.users}
                           unfollow={this.props.unfollow}
                           follow={this.props.follow}
                           followingInProgress={this.props.followingInProgress}
                    />
                </>
            }
        </>
    }
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getUsersFilter(state)
    }
}


export default compose(
    connect<MapStateToPropsType, MapDispatchToProps, OwnProps, AppStateType>(mapStateToProps, {follow, unfollow, getUsers})
)(UsersContainer)








/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userid) => {
            dispatch(unfollowAC(userid));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        loading: (isFetching) => {
            dispatch(loadingAC(isFetching))
        }

    }
}*/