import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Book from "../components/Book";
import EditBook from "../components/EditBook";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/book/:id" exact component={Book} />
      <Route path="/book/:id/edit" exact component={EditBook} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/signin" exact component={SignIn} />
    </Switch>
  </Router>
);
