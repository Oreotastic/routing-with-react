import React, { useState, useEffect } from 'react';
import qs from 'qs';
import { getHash } from './utilities/utils';
import Home from './components/Home';
import Nav from './components/Nav';
import Users from './components/Users';

function App() {
  const [params, setParams] = useState(qs.parse(getHash()));

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setParams(qs.parse(getHash()));
    });
    setParams(qs.parse(getHash()));
  }, []);

  return (
    <div className="App">
      <Nav />
      {params.view === undefined ? <Home /> : null}
      {params.view === 'users' ? <Users /> : null}
    </div>
  );
}

export default App;
