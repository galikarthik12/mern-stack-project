import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const MovieList = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Movie List</h2>
      {movies.length === 0 ? (
        <p>No movies available. Add a movie to get started!</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {movies.map((movie, index) => (
            <li
              key={index}
              style={{
                marginBottom: "10px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
            >
              <strong>Title:</strong> {movie.title} <br />
              <strong>Genre:</strong> {movie.genre} <br />
              <strong>Release Year:</strong> {movie.year}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;