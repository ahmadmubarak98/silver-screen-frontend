import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import { Appbar } from "components/modules";

// routes
import EmployeesView from "./Employees";
import { ROOT } from "~Routes";

import "./styles.css";

const Dashboard = (props) => {
  return (
    <div className="Dashboard">
      <Appbar />
      <div className="DashboardContainer">
        <Switch>
          <Route path={ROOT} component={EmployeesView} />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
