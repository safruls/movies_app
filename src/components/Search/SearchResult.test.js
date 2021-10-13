import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import SearchResult from "./SearchResult";
import React from "react";
import { Router } from "react-router-dom";

const movie = {
  Title: "Batman: The Killing Joke",
  Year: "2016",
  imdbID: "tt4853102",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
};

test("renders result card", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <SearchResult movie={movie} />
    </Router>
  );
  expect(screen.getByText(/Batman: The Killing Joke/i)).toBeInTheDocument();
});
