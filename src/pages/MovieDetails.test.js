import React from "react";
import { Provider } from "react-redux";
import MovieDetails from "./MovieDetails";
import { createStore, combineReducers } from "redux";
import { searchMovies } from "store/searchMovies/reducer";
import { render } from "@testing-library/react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import * as redux from "react-redux";

const state = {
  searchMovies: {
    movie: {
      Title: "Batman",
      Year: "1989",
      Rated: "PG-13",
      Released: "23 Jun 1989",
      Runtime: "126 min",
      Genre: "Action, Adventure",
      Director: "Tim Burton",
      Writer: "Bob Kane, Sam Hamm, Warren Skaaren",
      Actors: "Michael Keaton, Jack Nicholson, Kim Basinger",
      Plot: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
      Language: "English, French, Spanish",
      Country: "United States, United Kingdom",
      Awards: "Won 1 Oscar. 9 wins & 26 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "7.5/10",
        },
        {
          Source: "Rotten Tomatoes",
          Value: "71%",
        },
        {
          Source: "Metacritic",
          Value: "69/100",
        },
      ],
      Metascore: "69",
      imdbRating: "7.5",
      imdbVotes: "351,618",
      imdbID: "tt0096895",
      Type: "movie",
      DVD: "22 Aug 1997",
      BoxOffice: "$251,348,343",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },
    loading: false,
    lastQuery: "Batman",
  },
};

const mockDispatch = jest.fn();
const mockUseDispatch = jest.spyOn(redux, "useDispatch");
const history = createMemoryHistory();

beforeEach(() => mockUseDispatch.mockReturnValue(mockDispatch));

test("MovieDetails page after fetching the movie", () => {
  const store = createStore(combineReducers({ searchMovies }), {
    searchMovies: state.searchMovies,
  });
  const { getByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <MovieDetails />
      </Router>
    </Provider>
  );

  expect(mockUseDispatch).toHaveBeenCalledWith();
  expect(getByText(/Batman/i)).toBeInTheDocument();
  expect(getByText(/23 Jun 1989/i)).toBeInTheDocument();
});

test("MovieDetails when loading", () => {
  const history = createMemoryHistory();
  const store = createStore(combineReducers({ searchMovies }), {
    searchMovies: { movie: {}, loading: true },
  });

  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <MovieDetails />
      </Router>
    </Provider>
  );

  expect(getByTestId("spinny-thingy")).toBeInTheDocument();
});

afterAll(() => mockUseDispatch.mockClear());
