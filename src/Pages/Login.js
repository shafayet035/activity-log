import { Button, Snackbar, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { auth } from "../Firebase";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Login = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const history = useHistory();

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, []);

  const loginHandler = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        history.push("/");
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };

  return (
    <div className="login">
      {message && <div className="alert">{message}</div>}
      <form className="login-form" onSubmit={loginHandler}>
        <TextField
          className="activity-input"
          label="Enter Email"
          variant="outlined"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className="activity-input"
          label="password"
          variant="outlined"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          className="activity-btn"
          variant="contained"
          color="primary"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
