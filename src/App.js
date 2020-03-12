import React from "react";
import "./styles/index.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation.js";
import Home from "./pages/home.js";
import Scores from "./pages/scores.js";
import Schedule from "./pages/schedule.js";
import News from "./pages/news.js";
import Video from "./pages/video.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/scores">
            <Scores></Scores>
          </Route>
          <Route path="/schedule">
            <Schedule></Schedule>
          </Route>
          <Route path="/news">
            <News></News>
          </Route>
          <Route path="/video">
            <Video></Video>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
