// src/App.js
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PodcastList from "./components/PodcastList";
import ShowDetails from "./components/ShowList";
import Favorites from "./components/Favorites";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={PodcastList} />
          {/* Corrected route path to use ShowDetails instead of PodcastDetails */}
          <Route path="/podcast/:id" component={ShowDetails} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
