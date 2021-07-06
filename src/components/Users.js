import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pager from './Pager';
import qs from 'qs';

const API = `https://acme-users-api-rev.herokuapp.com/`;

const User = ({ user }) => {
  return (
    <ul>
      <li>Email: {user.email}</li>
    </ul>
  );
};

const Users = ({ params }) => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  //const [api, setAPI] = useState();

  const fetchUsers = async (idx = 0) => {
    const response = await axios.get(`${API}api/users/${idx}`);
    return response.data;
  };

  useEffect(() => {
    fetchUsers(params.idx).then(userData => {
      setUsers(userData.users);
      setCount(userData.count);
    });
  }, [params]);

  const user = users.find(u => u.id === params.id);

  return (
    <div>
      <h1>Users Page {count}</h1>
      <Pager
        count={count}
        //state={setAPI}
        params={params}
      />
      {!!user && <User user={user} />}
      <ul>
        {users.map(user => {
          return (
            <li key={user.id}>
              <a href={`#${qs.stringify({ ...params, ...{ id: user.id } })}`}>
                {user.fullName}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
