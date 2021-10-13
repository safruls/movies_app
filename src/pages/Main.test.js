import React from "react";
import { Provider } from "react-redux";
import Main from "./Main";
import { createStore, combineReducers } from "redux";
import { searchMovies } from "store/searchMovies/reducer";
import { render } from "@testing-library/react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";

const state = {
  searchMovies: {
    movies: [
      {
        Title: "Batman: The Killing Joke",
        Year: "2016",
        imdbID: "tt4853102",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      },
    ],
    loading: false,
    lastQuery: "Batman",
  },
};

test("Main page after fetching the movies", () => {
  const history = createMemoryHistory();
  const store = createStore(combineReducers({ searchMovies }), {
    searchMovies: state.searchMovies,
  });
  const { getByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <Main />
      </Router>
    </Provider>
  );

  expect(getByText(/Batman/i)).toBeInTheDocument();
});
