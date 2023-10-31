import { useState, useEffect } from 'react';

function Stories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3005/topstories')
      .then((response) => response.json())
      .then((json) => {
        console.log({ json });
        setStories(json);
      });
  }, []);

  return (
    <div className='Stories'>
      <h3>Stories</h3>
      {stories.map((story) => {
        const { id, by, time, title, url } = story;
        return (
          <div key={id}>
            <a href={url}>{title}</a>
            <div>
              {by} - {new Date(time).toLocaleString()}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Stories;
