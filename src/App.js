import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import Home from "./pages/Home/Home";
import PageSubscribe from "./pages/PageSubscribe/PageSubscribe";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/subscribe" component={PageSubscribe} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
