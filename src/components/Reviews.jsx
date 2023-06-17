import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Reviews() {
  const [movie, setMovie] = React.useState([]);

  const idResp = useParams();
  const id = idResp.movieId;
//   console.log(id);

  React.useEffect(() => {
    async function getMovies() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/reviews`,
          {
            params: {
              api_key: '5d366bada9007998a52c381f067bc493',
            },
          }
        );
        const about = response.data.results;
        console.log(response.data.results);
        setMovie(about);
      } catch (error) {
        console.error(error);
      }
    }
    getMovies();
  }, []);

  return <>
    <div>
      {movie.map(item => {
        return <div key={item.id}>{item.author}: {item.content}</div>
      })}
      </div>
    </>;
}

export default Reviews;
