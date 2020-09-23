import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import SensorForm from "../pages/SensorForm";
import CultureForm from "../pages/CultureForm";
import SectorForm from "../pages/SectorForm";
import ScheduleForm from "../pages/ScheduleForm";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/sensors" component={SensorForm} isPrivate />
      <Route path="/cultures" component={CultureForm} isPrivate />
      <Route path="/sectors" component={SectorForm} isPrivate />
      <Route path="/schedules" component={ScheduleForm} isPrivate />
    </Switch>
  );
}
