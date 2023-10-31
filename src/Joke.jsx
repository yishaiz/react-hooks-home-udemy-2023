import { useState, useEffect } from 'react';

const useFetch = (url, initialValue) => {
  const [result, setResult] = useState(initialValue);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log({ json });
        setResult(json);
      });
  }, []);

  return result;
};

function Joke() {
  const { setup, punchline } = useFetch('https://official-joke-api.appspot.com/jokes/random', {});

  return (
    <div>
      <h3>Joke</h3>
      <p>{setup}</p>
      <p>{punchline}</p>
    </div>
  );
}
export default Joke;
