import React from 'react';
import { User } from './models/user.model';

import './list.css';

const List = (props: IListProps) => {
    const { users } = props;
    return (
        <div className="users-list">
            <div className="users-list-header">
                <p>Avatar</p>
                <p>Id</p>
                <p>Nome completo</p>
                <p>Email</p>
            </div>
            {users.map((user: User) => {
                return (
                    <div key={user.id} className="users-list-line">
                        <img
                            src={user.avatar}
                            alt={`${user.first_name} ${user.last_name}'s avatar.`}
                        />
                        <p className="list-group-item">{user.id}</p>
                        <p className="list-group-item">{`${user.first_name} ${user.last_name}`}</p>
                        <p className="list-group-item">{user.email}</p>
                    </div>
                );
            })}
        </div>
    );
};

interface IListProps {
    users: User[];
}

export default List;
