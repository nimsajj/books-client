import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, CssBaseline } from "@material-ui/core";

import Navbar from "./Navbar";

const Home = () => <div>Home page</div>;
const Login = () => <div>Login page</div>;

const App = () => (
  <Router>
    <CssBaseline />
    <Navbar />
    <Container maxWidth="sm">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Container>
  </Router>
);

export default App;
