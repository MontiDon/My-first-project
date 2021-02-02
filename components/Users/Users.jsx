import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import React from "react";
import {NavLink} from "react-router-dom";
import {userAPI} from "../../api/api";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.usersPage}>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            <h2>Users</h2>
            {
                props.users.map(u => {
                    /*console.log(u)*/
                    return (
                        <div key={u.id} className={s.users}>
                        <div>
                            <div className={s.usersAvatar}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button disabled={props.followingInProgress.some(id=> id === u.id)} onClick={() => {
                                        props.unfollow(u.id)}}>Unfollow</button>

                                    : <button disabled={props.followingInProgress.some(id=> id === u.id)} onClick={() => {
                                        props.follow(u.id)}}>Follow</button>}
                            </div>
                        </div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{'u.location.country'},</div>
                            <div>{'u.location.city'}</div>
                        </div>
                    </div>)
                })
            }
        </div>
    )
}

export default Users;

