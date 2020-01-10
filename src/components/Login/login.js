import React from "react";
import { auth } from "./../../auth";
import { Layout } from "../layout";
import "./login.css";

export const Login = props => {
  const handleSubmit = e => {
    e.preventDefault();

    let username = e.target.name.value;
    let password = e.target.password.value;

    if (username === "admin" && password === "12345") {
      auth.set(true);
      props.history.push("/home");
    } else {
      alert("Login error");
    }

    e.target.reset();
  };

  return (
    <Layout>
      <div>
        <form onSubmit={e => handleSubmit(e)}>
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="name"
            required
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </Layout>
  );
};
