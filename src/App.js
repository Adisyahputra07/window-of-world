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
import Test from "./components/SideBar/test";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/subscribe" component={PageSubscribe} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/income-transaction" component={IncomeTransaction} />
          <Route exact path="/addBook" component={AddBook} />
          <Route exact path="/DetailReadbook" component={DetailReadbook} />
          <Route exact path="/sidebar" component={Test} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
