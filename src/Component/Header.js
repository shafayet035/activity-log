import { Button } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../Firebase";

const Header = () => {
  const signOutHandler = () => {
    auth.signOut();
    console.log("Logged Out");
  };

  return (
    <header>
      <NavLink to="/">
        <Button>Home</Button>
      </NavLink>
      <NavLink to="/activity">
        <Button>Activity</Button>
      </NavLink>
      <NavLink to="/docs">
        <Button>Documentaion</Button>
      </NavLink>
      <Button color="secondary" onClick={signOutHandler}>
        Logout
      </Button>
    </header>
  );
};

export default Header;
