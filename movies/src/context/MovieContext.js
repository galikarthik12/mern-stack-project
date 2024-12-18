import React, { createContext, useState } from "react";

// Create the Context
export const MovieContext = createContext();

// Create the Provider Component
const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  // Function to add a new movie
  const addMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  return (
    <MovieContext.Provider value={{ movies, addMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;