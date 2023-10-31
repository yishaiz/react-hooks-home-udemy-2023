import { useState, useEffect } from 'react';

export const useFetch = (url, initialValue) => {
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

// export default useFetch;
