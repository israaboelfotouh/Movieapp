import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/MoviList.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = "fa5186884d34335dfd6d4a209f3b811f";
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              api_key: apiKey,
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="contaniner">
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movieDetails/${movie.id}`}>
              <h2>{movie.title}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
