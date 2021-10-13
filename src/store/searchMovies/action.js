import { axiosRequestInstance } from "helpers";

export const setMovies = (movies) => {
  return {
    type: "SET_MOVIES",
    payload: { movies },
  };
};

const setLoading = (loading) => {
  return {
    type: "SET_LOADING",
    loading,
  };
};

const setLastQuery = (lastQuery) => {
  return {
    type: "SET_LAST_QUERY",
    lastQuery,
  };
};

const setMovieDetail = (movie) => {
  return {
    type: "SET_MOVIE_DETAIL",
    movie,
  };
};

export const fetchSearchedMovies = (query, page = 1) => {
  return (dispatch, getState) => {
    const { movies, lastQuery } = getState().searchMovies;

    dispatch(setLoading(true));
    const apiKey = "faf7e5bb";
    const subRoute = `?apikey=${apiKey}&s=${query}&page=${page}`;
    axiosRequestInstance()
      .get(subRoute)
      .then((data) => {
        const queriedMovies = data?.data?.Search;
        if (lastQuery === query && page > 1) {
          dispatch(setMovies(movies.concat(queriedMovies)));
        } else {
          dispatch(setMovies(queriedMovies));
          dispatch(setLastQuery(query));
        }
      })
      .catch((error) => {
        throw error;
      })
      .finally(() => dispatch(setLoading(false)));
  };
};

export const fetchMovieDetails = (title) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const apiKey = "faf7e5bb";
    const subRoute = `?apikey=${apiKey}&t=${title}&plot=full`;

    try {
      const { data } = await axiosRequestInstance().get(subRoute);
      dispatch(setMovieDetail(data));
    } catch (err) {
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  };
};
