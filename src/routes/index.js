import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import SensorForm from "../pages/SensorForm";
import CultureForm from "../pages/CultureForm";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/sensors" component={SensorForm} isPrivate />
      <Route path="/cultures" component={CultureForm} isPrivate />
    </Switch>
  );
}
