const initialState = {
  movies: [],
  loading: false,
  lastQuery: "",
  movie: {},
};

export const searchMovies = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return { ...state, movies: action.payload.movies };
    case "SET_LOADING":
      return { ...state, loading: action.loading };
    case "SET_LAST_QUERY":
      return { ...state, lastQuery: action.lastQuery };
    case "SET_MOVIE_DETAIL":
      return { ...state, movie: action.movie };
    default:
      return state;
  }
};
