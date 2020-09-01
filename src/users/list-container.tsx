import List from './list';

import axios from 'axios';
import { User } from './models/user.model';
import React, { useEffect, useState } from 'react';

const USERS_API_URL = process.env.REACT_APP_USERS_API_URL as string;

const getUsersAsync = async (): Promise<User[]> => {
    var users = await axios.get(USERS_API_URL);
    return users.data.data as User[];
};

const ListContainer = (_props: IListContainerProps) => {
    let [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        (async () => {
            try {
                var usersResponse = await getUsersAsync();
                setUsers(usersResponse);
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);
    return <List users={users} />;
};

interface IListContainerProps {}

export default ListContainer;
