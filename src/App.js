import React from "react";
import "./App.scss";
import ImageGrid from "./components/ImageGrid";
import configureStore from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Videos from "./components/Videos";
import Keyboard from "components/Keyboard/Keyboard";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Homes</Link>
                </li>
                <li>
                  <Link to="/photos">Photos</Link>
                </li>
                <li>
                  <Link to="/videos">Videos</Link>
                </li>
                <li>
                  <Link to="/math-keyboard">Keyboard</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route path="/math-keyboard">
              <Keyboard />
            </Route>
            <Route path="/videos">
              <Videos />
            </Route>
            <Route path="/photos">
              <ImageGrid />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
