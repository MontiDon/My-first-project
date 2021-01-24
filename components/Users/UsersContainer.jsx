import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setUsers,
    unfollow,
    setTotalUsersCount,
    loading
} from "../../redux/Users-reducer";
import Users from './Users';
import Preloader from "../Common/Preloader/Preloader";
import {userAPI} from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.loading(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.loading(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.loading(true)
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.loading(false)
            this.props.setUsers(data.items);
        });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage,
                                                         setTotalUsersCount, loading})(UsersContainer);








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