import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MoviePage from '../pages/MoviePage';
import Layout from './Layout';
import Reviews from './Reviews';
import Cast from './Cast';
import Movies from 'pages/Movies';
// import css from '../css/App.module.css';

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
