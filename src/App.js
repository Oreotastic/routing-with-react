import React, {useState, useEffect} from 'react';
import qs from 'qs'

function App() {

  const API = `https://acme-users-api-rev.herokuapp.com/`
  
  const getHash = ()=> {
    return window.location.hash.slice(1);
  }

  const [ params, setParams ] = useState(qs.parse(getHash()));

  useEffect(()=> {
    window.addEventListener('hashchange', ()=> {
      setParams(qs.parse(getHash()));
    });
    setParams(qs.parse(getHash()));
  }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
