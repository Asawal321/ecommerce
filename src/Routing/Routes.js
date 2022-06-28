import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav } from "../component";
import RouteObj from "./RouteObj";

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route
          exact
          path={RouteObj.Home.path}
          component={RouteObj.Home.component}
        />
        <Route
          exact
          path={RouteObj.Cart.path}
          component={RouteObj.Cart.component}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
