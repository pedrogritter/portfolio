import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Router, Route, Switch } from "react-router";

import './App.css';

import Homepage from "./pages/homepage";

function App() {
  return (
    <Router>
        <Switch>
          {/* <Route path="/portfolio/league/:id">
            <LeaguePage />
          </Route> */}
          <Route path="/portfolio/">
            <Homepage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
