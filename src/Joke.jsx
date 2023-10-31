import { useState, useEffect } from 'react';

function Joke() {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/jokes/random')
      .then((response) => response.json())
      .then((json) => {
        // console.log({ json });
        setJoke(json);
      });
  }, []);

  const { setup, punchline } = joke;

  return (
    <div>
      <h3>Joke</h3>
      <p>{setup}</p>
      <p>{punchline}</p>
    </div>
  );
}
export default Joke;
