import React, { useState, useEffect } from 'react';
import qs from 'qs'
import 'bootstrap/dist/css/bootstrap.css';
import { getHash } from './utilities/utils'
import Home from './components/Home'
import Nav from './components/Nav'
import Users from './components/Users'

const API = `https://acme-users-api-rev.herokuapp.com/`

function App() {

  const [ params, setParams ] = useState(qs.parse(getHash()));

  useEffect(()=> {
    window.addEventListener('hashchange', ()=> {
      setParams(qs.parse(getHash()));
    });
    setParams(qs.parse(getHash()));
  }, []);

  return (
    <div className="container">
      <Nav />
      {params.view === undefined ? <Home />: null}
      {params.view === 'users' ? <Users />: null}
    </div>
  );
}

export default App;
