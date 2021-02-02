import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, CssBaseline } from "@material-ui/core";
import { TopMenu } from "./navigation";
import { routes } from "../config";

const App = () => (
  <Router>
    <CssBaseline />
    <TopMenu />
    <Container maxWidth="md">
      <Switch>
        {routes.map((route) => (
          <Route exact key={route.path} {...route} />
        ))}
        <Route component={() => <div>Error 404: Route not found</div>} />
      </Switch>
    </Container>
  </Router>
);

export default App;
