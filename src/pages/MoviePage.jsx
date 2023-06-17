import React from 'react';
import axios from 'axios';
import { useParams, Link, Outlet } from 'react-router-dom';

function MoviePage() {
  const [movie, setMovie] = React.useState([]);
  const [genre, setGenre] = React.useState([]);
  const [date, setDate] = React.useState('');

  const idResp = useParams();
  const id = idResp.movieId;
  console.log(id);
  // const location = useLocation();

  React.useEffect(() => {
    async function getMovies() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: '5d366bada9007998a52c381f067bc493',
            },
          }
        );
          const movie = response.data;
          // console.log(movie.poster_path)
        const genre = response.data.genres;
        const date = response.data.release_date;
        // console.log(response);
        setMovie(movie);
        setGenre(genre);
        setDate(date);
      } catch (error) {
        console.error(error);
      }
    }
    getMovies();
  }, []);

  const year = date.substring(0, 4);
  return (
      <>
          
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" width={200} />
      <div>
        {movie.title} ({year})
      </div>
      <div>
        Overview: <br /> {movie.overview}
      </div>
      <div>Genres</div>
      {genre.map(genr => {
        return <div key={genr.id}>{genr.name}</div>;
      })}

      <ul> <li><Link to='cast'>Cast</Link></li></ul>
      <ul> <li> <Link to='revievs'>Reviews</Link></li></ul>

      <Outlet/>
    

    </>
  );
}

export default MoviePage;