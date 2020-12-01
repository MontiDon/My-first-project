import React from "react";
import s from './Users.module.css'

const Users = (props) => {

    return <div className={s.usersPage}>
        <h2>Users</h2>
        {
            props.users.map(u => <div key={u.id} className={s.users}>
                <div>
                    <div className={s.usersAvatar}>
                        <img src={u.userAvatar} alt="userAvatar"/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </div>
                <div>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </div>
                <div>
                    <div>{u.location.country},</div>
                    <div>{u.location.city}</div>
                </div>
            </div>)
        }
    </div>
}


export default Users;


