import React from "react";
import s from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/user.jpg'


class Users extends React.Component {

    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <div className={s.usersPage}>
            <h2>Users</h2>
            {
                this.props.users.map(u => <div key={u.id} className={s.users}>
                    <div>
                        <div className={s.usersAvatar}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="userAvatar"/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
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
            }
        </div>
    }
}


export default Users;


