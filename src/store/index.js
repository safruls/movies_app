import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { searchMovies } from "./searchMovies/reducer";

const rootReducer = combineReducers({ searchMovies });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
