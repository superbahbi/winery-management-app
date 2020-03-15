import React, { Fragment } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Index from "./Views/Index";
import Login from "./Views/Login";
import Signup from "./Views/Signup";
import DashboardView from "./Views/Dashboard";
import Batch from "./Views/Batch";
import Vessel from "./Views/Vessel";
import WorkOrder from "./Views/WorkOrder";
import Analysis from "./Views/Analysis";
import Inventory from "./Views/Inventory";
import History from "./Views/History";
import Customers from "./Views/Customers";
import Reports from "./Views/Reports";
import Account from "./Views/Account";
import Security from "./Views/Security";
import { history } from "../src/_helpers";
import PrivateRoute from "./PrivateRoute";
function Routes() {
  return (
    <Router history={history}>
      <Fragment>
        <div>
          <Switch>
            <Route path="/" component={Index} exact />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/dashboard" component={DashboardView} />
            <PrivateRoute path="/batch" component={Batch} />
            <PrivateRoute path="/vessel" component={Vessel} />
            <PrivateRoute path="/workorder" component={WorkOrder} />
            <PrivateRoute path="/analysis" component={Analysis} />
            <PrivateRoute path="/inventory" component={Inventory} />
            <PrivateRoute path="/history" component={History} />
            <PrivateRoute path="/customers" component={Customers} />
            <PrivateRoute path="/reports" component={Reports} />
            <PrivateRoute path="/account" component={Account} />
            <PrivateRoute path="/security" component={Security} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}
export default Routes;
