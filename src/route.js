import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tenders from "./features/Tenders/Tenders";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Tenders />
        </Route>

      </Switch>
    </Router>
  );
};

export default Routes;
