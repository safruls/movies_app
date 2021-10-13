import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/:title">
              <MovieDetails />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
