import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Create from "./Create";

import "./app.css";

export default function App() {
  return (
    <div className="center">
      <Router>
        <Switch>
          <Route path="/" exact>
            <div className="main-page">
              <div className="header">
                <h1>DepthView</h1>
                <h4>
                  A simple platform for anyone to connect their face with a
                  image portfolio.
                </h4>
              </div>
              <div className="button-container">
                <div className="main-button">
                  <Link to="/create">Create Your Own</Link>
                </div>
                <div className="main-button">
                  <Link to="/view">Profile Viewer</Link>
                </div>
              </div>
            </div>
          </Route>
          <Route
            path="/view"
            component={(props) => {
              window.location.replace(
                "https://console.echoAR.xyz/arjs?key=orange-term-2430"
              );
            }}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}
