import React from 'react';
import axios from 'axios';
import { useSearchParams, Link } from 'react-router-dom';

function Movies() {
  const [movie, setMovie] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(searchParams.get('value'));

  const inputValue = searchParams.get('value');

  // const [value, setValue] = React.useState('');

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
      <input type="text" onChange={updateInputValue} />
      <button type="submit" onClick={getMovies}>
        search
      </button>

      <div>
        {movie.map(item => {
            return (
                <Link key={item.id} to={`/movies/${item.id}`}> <p>{ item.title}</p></Link>
          );
        })}
      </div>
    </>
  );
}

export default Movies;
