import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Beer from "./Pages/Beer";
import BeerPizza from "./Pages/BeerPizza";
import BeerSteak from "./Pages/BeerSteak";

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/beerpizza">Beer with pizza</Link>
            </li>
            <li>
              <Link to="/beersteak">Beer with steak</Link>
            </li>
            <li>
              <Link to="/">Beer</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/beerpizza">
           <BeerPizza />
          </Route>
          <Route path="/beersteak">
            <BeerSteak />
          </Route>
          <Route path="/">
          <Beer />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
