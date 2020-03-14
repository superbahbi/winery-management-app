import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./Views/Index";
import Login from "./Views/Login";
import Signup from "./Views/Signup";
import DashboardView from "./Views/Dashboard";
import Lots from "./Views/Lots";
import Vessel from "./Views/Vessel";
import WorkOrder from "./Views/WorkOrder";
import Analysis from "./Views/Analysis";
import Inventory from "./Views/Inventory";
import History from "./Views/History";
import Customers from "./Views/Customers";
import Reports from "./Views/Reports";
import Account from "./Views/Account";
import Security from "./Views/Security";

function Routes() {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route path="/" component={Index} exact />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={DashboardView} />
          <Route path="/lots" component={Lots} />
          <Route path="/vessel" component={Vessel} />
          <Route path="/workorder" component={WorkOrder} />
          <Route path="/analysis" component={Analysis} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/history" component={History} />
          <Route path="/customers" component={Customers} />
          <Route path="/reports" component={Reports} />
          <Route path="/account" component={Account} />
          <Route path="/security" component={Security} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}
export default Routes;
