// src/App.js
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PodcastList from "./components/PodcastList";
import PodcastDetails from "./components/ShowDetails";
import Favorites from "./components/Favorites";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={PodcastList} />
          <Route path="/podcast/:id" component={PodcastDetails} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
