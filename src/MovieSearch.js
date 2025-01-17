import React, { useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard"; // Import MovieCard

const MovieSearch = () => {
  const [title, setTitle] = useState("");
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "7b0fda59a769ff4519751250e3edc111";

  const handleSearch = () => {
    if (title.trim()) {
      setError("");
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=${apiKey}`
        )
        .then((response) => {
          if (response.data.results.length > 0) {
            const movie = response.data.results[0];
            setMovieData({
              title: movie.title,
              poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
              description: movie.overview,
              releaseDate: movie.release_date,
              rating: movie.vote_average,
            });
          } else {
            setMovieData(null);
            setError("No movie found");
          }
        })
        .catch((error) => {
          setError("An error occurred while fetching movie data");
          console.error(error);
        });
    } else {
      setError("Please enter a movie title");
    }
  };

  return (
    <div>
      <h1>Movie Database</h1>
      <input
        type="text"
        placeholder="Enter movie title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {movieData && <MovieCard movie={movieData} />}{" "}
      {/* Pass movieData to MovieCard */}
    </div>
  );
};

export default MovieSearch;
