import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from '../css/Layout.module.css';

function Layout() {
  return (
    <div>
      <nav className={css.Navigation}>
        <NavLink to="/" className={css.NavLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.NavLink}>
          Movies
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
