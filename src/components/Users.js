import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pager from './Pager';
const API = `https://acme-users-api-rev.herokuapp.com/`;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState();

  useEffect(() => {
    axios.get(`${API}api/users`).then(response => {
      setCount(response.data.count);
      return setUsers(response.data.users);
    });
  }, []);

  return (
    <div>
      <h1>Users Page</h1>
      <Pager count={count} />
      <ul>
        {users.map(user => {
          return <li key={user.id}>{user.fullName}</li>;
        })}
      </ul>
    </div>
  );
};

export default Users;
