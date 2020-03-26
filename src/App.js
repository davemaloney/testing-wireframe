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
  window.digitalData = {
    page: {
      pageInfo: {
        pageName: "nba:teams:home",
        siteSection: "nba:teams",
        subSection1: "nba:teams:home",
        subSection2: "nba:teams:home",
        primaryCategory: "teams",
        secondaryCategory: "index"
      },
      content: {
        contentType: "",
        datePublished: "",
        gameBroadcasters: "",
        gameID: "",
        gameMatchup: "",
        gameState: "",
        playerName: "Steven Adams",
        playerId: "203500",
        teamName: "OKC",
        teamId: "1610612760"
      }
    },
    site: {
      propertyName: "nba:web",
      league: "nba",
      partner: "dave maloney"
    },
    user: {
      language: "en_us",
      userState: "authenticated",
      userType: "subscriber",
      userIdentifier: "",
      accountIdentifier: "",
      userName: "",
      userAccount: "",
      freeTrial: "false",
      entitlement: "GSEASON",
      entitlementType: "annual",
      notificationStatus: "false",
      noSpoilers: "true",
      hasFavoritePlayer: "false",
      hasFavoriteTeam: "false",
      hasFavoriteContent: "false",
      hasPurchased: "false",
      purchasesCompleted: "2",
      videosWatched: "18"
    }
  };
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
