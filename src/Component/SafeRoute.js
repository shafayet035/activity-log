import React from "react";
import Home from "../Pages/Home";
import Header from "../Component/Header";
import Activity from "../Pages/Activity";
import Docs from "../Pages/Docs";
import { Route, Switch } from "react-router-dom";

const SafeRoute = ({ user }) => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/activity">
          <Activity uid={user.uid} />
        </Route>
        <Route path="/docs">
          <Docs />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default SafeRoute;
