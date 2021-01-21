import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, CssBaseline } from "@material-ui/core";
import { TopMenu } from "./navigation";
import { HomePage } from "../features/books";

const Login = () => <div>Login page</div>;

const App = () => (
  <Router>
    <CssBaseline />
    <TopMenu />
    <Container maxWidth="md">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Container>
  </Router>
);

export default App;
