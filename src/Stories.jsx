import { useFetch } from './hooks/useFetch';

function Stories() {
  const stories = useFetch('http://localhost:3005/topstories', []);

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
