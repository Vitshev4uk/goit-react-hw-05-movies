import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import css from '../css/Cast.module.css';

function Cast() {

const [movie, setMovie] = React.useState([]);

  const idResp = useParams();
  const id = idResp.movieId;

  React.useEffect(() => {
    async function getMovies() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits`,
          {
            params: {
              api_key: '5d366bada9007998a52c381f067bc493',
            },
          }
        );
        const about = response.data.cast;
        console.log(response.data.cast);
        setMovie(about);
      } catch (error) {
        console.error(error);
      }
    }
    getMovies();
  }, [id]);

  return <>
    <div className={css.Container}>
      {movie.map(item => {
        return <div key={item.id}> <p className={css.Name}>{item.name}</p> <img src={`https://image.tmdb.org/t/p/original${item.profile_path}`} alt="" width={150}/></div>
      })}
      </div>
    </>;


}

export default Cast;