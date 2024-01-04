import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../css/MovieDetails.css";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = "fa5186884d34335dfd6d4a209f3b811f";
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: apiKey,
            },
          }
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="movie-details-container">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
