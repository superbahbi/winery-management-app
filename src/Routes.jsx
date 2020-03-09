import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "./Views/Index";
import Dashboard from "./Views/Dashboard";
import Vessel from "./Views/Vessel";
import Account from "./Views/Account";
function Routes() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/vessel" component={Vessel} />
        <Route path="/account" component={Account} />
      </Switch>
    </main>
  );
}
export default Routes;
