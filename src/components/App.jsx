import React from 'react';
// import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MoviePage from '../pages/MoviePage';
import Layout from './Layout';
import Reviews from './Reviews';
import Cast from './Cast';
import Movies from 'pages/Movies';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies/>} />
        <Route path="movies/:movieId" element={<MoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="revievs" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

// async function getMovies() {
//   try {
//     const response = await axios.get(
//       'https://api.themoviedb.org/3/trending/all/day',
//       {
//         params: {
//           api_key: '5d366bada9007998a52c381f067bc493',
//         },
//       }
//     );
//     console.log(response.data);
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// }
