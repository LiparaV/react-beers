import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Beer from "./Pages/Beer";
import BeerPizza from "./Pages/BeerPizza";
import BeerSteak from "./Pages/BeerSteak";
import styles from "./app.style.module.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul className={styles.navigation}>
              <li className={styles.beerLink}>
                <Link className={styles.link} to="/beerpizza">
                  Beer with pizza
                </Link>
              </li>
              <li className={styles.beerLink}>
                <Link className={styles.link} to="/beersteak">
                  Beer with steak
                </Link>
              </li>
              <li className={styles.beerLink}>
                <Link className={styles.link} to="/">
                  Beer
                </Link>
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
