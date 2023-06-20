import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import css from '../css/Movies.module.css';


function Movies() {
  const [movie, setMovie] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();


  const query = searchParams.get('query') ?? '';

  const handleInputChange = event => {
    const { value } = event.currentTarget;
    setInputValue(value);
    console.log('inputvalue', value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      alert('Search query can not be empty.');
      return;
    }
    setSearchParams(inputValue !== '' ? { query: inputValue } : {});
    console.log('searchParams', searchParams);
  };

  async function getMovies(query) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}`,
        {
          params: {
            api_key: '5d366bada9007998a52c381f067bc493',
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (query) {
      getMovies(query).then(resp => {
        setMovie([...resp.results]);
      });
    }
  }, [query]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className={css.Input}
        />
        <button type="submit">search</button>
      </form>

      <div className={css.Container}>
        {movie.map(item => {
          return (
            <Link
              key={item.id}
              to={`${item.id}`}
              state={{ from: location }}
              className={css.MoviesLink}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Movies;
