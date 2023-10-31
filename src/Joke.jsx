// import useFetch from './hooks/useFetch';

import { useFetch } from './hooks/useFetch';

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
