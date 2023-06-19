import React from 'react';
import axios from 'axios';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import BackLink from 'components/BackLink';
import css from '../css/MoviePage.module.css';
import { Suspense } from 'react';

function MoviePage() {
  const [movie, setMovie] = React.useState([]);
  const [genre, setGenre] = React.useState([]);
  const [date, setDate] = React.useState('');

  const location = useLocation();

  const backLink = location.state?.from ?? '/';
  // я не розумію де цей стан задати шоб воно вибирало

  const idResp = useParams();
  const id = idResp.movieId;
  console.log(id);

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
        const genre = response.data.genres;
        const date = response.data.release_date;
        setMovie(movie);
        setGenre(genre);
        setDate(date);
      } catch (error) {
        console.error(error);
      }
    }
    getMovies();
  }, [id]);

  const year = date.substring(0, 4);
  return (
    <>
      <BackLink to={backLink}>back to homepage</BackLink>
      <div className={css.Container}>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt=""
          width={200}
          className={css.Image}
        />
        <div className={css.ContInfo}>
               <h2>
          {movie.title} ({year})
        </h2>
        <p className={css.Text}><span className={css.Descr}>Overview:</span>
           <br /> {movie.overview}
        </p>
        <p> <span className={css.Descr}>Genres:</span></p>
        {genre.map(genr => {
          return <p key={genr.id}>{genr.name}</p>;
        })}
        </div>
   
      </div>
      <ul>
        <li>
          <Link  className={css.Link} to="cast">Cast</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link className={css.Link} to="revievs">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>...Loading</div>}>
          <Outlet />
      </Suspense>
    </>
  );
}

export default MoviePage;
