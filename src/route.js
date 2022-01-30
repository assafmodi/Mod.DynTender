import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tenders from "./features/Tenders/Tenders";
import Tender from "./features/Tender/Tender";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Tenders">
          <Tenders />
        </Route>
        <Route exact path="/Tender/:id">
          <Tender />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
