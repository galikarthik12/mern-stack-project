import React from "react";
import './index.css';
import MovieList from "./components/MovieList";
import AddMovieForm from "./components/AddMovieForm";

const App = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Movie Management Tool</h1>
      <MovieList />
      <AddMovieForm />
    </div>
  );
};

export default App;