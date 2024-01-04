import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import MovieList from "./MovieList";

export default function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar">
          <div className="nav-contant contaniner">
            <h2>
              <Link to="/">LOGO-APP</Link>
            </h2>
            <p>
              <Link to="/wishlist">Wish List</Link>
            </p>
          </div>
        </nav>
      </div>

      <Search />
      <MovieList />
    </>
  );
}
