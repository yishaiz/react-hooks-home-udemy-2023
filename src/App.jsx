import { useState } from 'react';

import './App.css';

function App() {
  const [userQuery, setUserQuery] = useState('');

  const updateUserQuery = (event) => {
    console.log({ userQuery });

    setUserQuery(event.target.value);
  };

  return (
    <div className='App'>
      <h1>React Hooks</h1>
      <div className='form'>
        <input value={userQuery} onChange={updateUserQuery} />
        <button>Search</button>
      </div>
    </div>
  );
}

export default App;
