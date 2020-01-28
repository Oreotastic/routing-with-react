import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pager from './Pager';
const API = `https://acme-users-api-rev.herokuapp.com/`;

const Users = ({ params }) => {
  console.log(params);

  const [users, setUsers] = useState([]);
  const [count, setCount] = useState();
  const [api, setAPI] = useState();

  //   const grabPage = num => {
  //     axios.get(`${api}/${num}`).then(response => {
  //       setCount(response.data.count);
  //       return setUsers(response.data.users);
  //     });
  //   };

  useEffect(() => {
    axios
      .get(`${API}api/users/${params.idx ? params.idx : ''}`)
      .then(response => {
        setCount(response.data.count);
        return setUsers(response.data.users);
      });
  }, [params]);
  return (
    <div>
      <h1>Users Page {count}</h1>
      <Pager count={count} state={setAPI} params={params} />
      <ul>
        {users.map(user => {
          return <li key={user.id}>{user.fullName}</li>;
        })}
      </ul>
    </div>
  );
};

export default Users;
