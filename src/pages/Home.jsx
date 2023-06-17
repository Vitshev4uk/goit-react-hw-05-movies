import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import css from '../css/Home.module.css';

function Home() {
  const [movies, setMovie] = React.useState([]);

  React.useEffect(() => {
    async function getMovies() {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/all/day',
          {
            params: {
              api_key: '5d366bada9007998a52c381f067bc493',
            },
          }
        );
        const movies = response.data.results;
        console.log(response.data.results);
        setMovie(movies);
      } catch (error) {
        console.error(error);
      }
    }
    getMovies();
  }, []);

  return (
    <div>
      <h1 className={css.Title}>Tranding today</h1>
      <div className={css.Container}>
        {movies.map(movie => {
          return (
            <Link
              key={movie.id}
              to={`/movies/${movie.id}`}
              className={css.MoviesLink}
            >
              {movie.title || movie.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
