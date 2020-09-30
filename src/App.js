/* eslint react/no-did-mount-set-state: 0 */

import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { save, load } from "redux-localstorage-simple";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";
import "./App.css";
import Footer from "./Footer";

import MoviesList from "./movies/MoviesList";
import MovieDetail from "./movies/MovieDetail";

const middleware = [logger, thunk];

// const hello = () => 'Hello';
const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save()))
);

const App = () => (
  <Provider store={store}>
    {/* <Router basename="/work/movieapp"> */}
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src="./logo.png" className="App-logo" alt="logo" />
          </Link>
        </header>

        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
        <Footer />
      </div>
    </Router>
  </Provider>
);

export default App;
