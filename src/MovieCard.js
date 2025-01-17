import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <img src={movie.poster} alt={movie.title} />
      <p>
        <strong>Description: </strong>
        {movie.description}
      </p>
      <p>
        <strong>Release Date:</strong> {movie.releaseDate}
      </p>
      <p>
        <strong>Rating:</strong> {movie.rating}
      </p>
    </div>
  );
};

export default MovieCard;
