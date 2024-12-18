import React, { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const AddMovieForm = () => {
  const { addMovie } = useContext(MovieContext);

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && genre && year) {
      addMovie({ title, genre, year });
      setTitle("");
      setGenre("");
      setYear("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "20px",
        marginTop: "20px",
        border: "1px solid #ddd",
        borderRadius: "5px",
      }}
    >
      <h2>Add a New Movie</h2>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ marginLeft: "10px", padding: "5px", width: "200px" }}
          />
        </label>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Genre:
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            style={{ marginLeft: "10px", padding: "5px", width: "200px" }}
          />
        </label>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Release Year:
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            style={{ marginLeft: "10px", padding: "5px", width: "200px" }}
          />
        </label>
      </div>
      <button type="submit" style={{ padding: "10px 20px" }}>
        Add Movie
      </button>
    </form>
  );
};

export default AddMovieForm;