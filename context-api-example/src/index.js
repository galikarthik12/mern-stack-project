import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeProvider from "./context/ThemeContext"; // Import the Provider

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
