import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// component
import LandingPage from "./pages/LandingPage/LandingPage";
import Home from "./pages/Home/Home";
import PageSubscribe from "./pages/PageSubscribe/PageSubscribe";
import Profile from "./pages/Profile/Profile";
import IncomeTransaction from "./pages/IncomeTransaction/IncomeTransaction";
import AddBook from "./pages/AddBook/AddBook";
import DetailReadbook from "./pages/DetailReadbook/DetailReadbook";
import ReadBook from "./pages/read-books/ReadBook";

// FakeData
import dataUser from "../src/fakeData/dataUser.json";

function App() {
  // set local storage
  localStorage.setItem("dataUser", JSON.stringify(dataUser));
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/subscribe" component={PageSubscribe} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/income-transaction" component={IncomeTransaction} />
          <Route exact path="/add-book" component={AddBook} />
          <Route exact path="/detail-readbook/:id" component={DetailReadbook} />
          <Route exact path="/readbook" component={ReadBook} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
