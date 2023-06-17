import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <nav>
        <NavLink to="/">
          <div>Home</div>
        </NavLink>
        <NavLink to="/movies">
          <div>Movies</div>
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
