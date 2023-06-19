import React from 'react';
import axios from 'axios';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
// import BackLink from 'components/BackLink';
import css from '../css/Movies.module.css';

function Movies() {
  const [movie, setMovie] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // const location = useLocation();
  // const backLinkHref = location.state?.from ?? "/";
  // не розумію після слеша додаю movies і падає сторінка

  const inputValue = searchParams.get('value');

  async function getMovies() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${inputValue}`,
        {
          params: {
            api_key: '5d366bada9007998a52c381f067bc493',
          },
        }
      );
      const filteredMovie = response.data.results;
      console.log(response.data.results);
      setMovie(filteredMovie);
    } catch (error) {
      console.error(error);
    }
  }

  const updateInputValue = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ value: e.target.value });
  };

  return (
    <>
      {/* <div><BackLink to={backLinkHref}>back to homepage</BackLink></div> */}
      <input type="text" onChange={updateInputValue} className={ css.Input} />
      <button type="submit" onClick={getMovies}>
        search
      </button>

      <div className={css.Container}>
        {movie.map(item => {
            return (
                <Link key={item.id} to={`/movies/${item.id}`} className={css.MoviesLink}>  {item.title}</Link>
          );
        })}
      </div>
    </>
  );
}

export default Movies;
