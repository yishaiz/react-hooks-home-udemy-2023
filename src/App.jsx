import { useState } from 'react';

import './App.css';
import Joke from './Joke';

function App() {
  const [userQuery, setUserQuery] = useState('');

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  };

  const updateUserQuery = (event) => {
    console.log({ userQuery });

    setUserQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchQuery();
    }
  };

  return (
    <div className='App'>
      <h1>React Hooks</h1>
      <div className='form'>
        <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress} />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
    </div>
  );
}

export default App;
