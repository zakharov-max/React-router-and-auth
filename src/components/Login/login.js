import React from "react";
import { signIn } from "../../api";
import history from "../../history";
import { Layout } from "../layout";
import "./login.css";

export const Login = props => {
  const handleSubmit = async e => {
    e.preventDefault();

    let username = e.target.name.value;
    let password = e.target.password.value;

    const result = await signIn(username, password);
    if (result) {
      history.push("/home");
    } else {
      alert("Check your username or password");
    }
  };

  return (
    <Layout>
      <div>
        <form onSubmit={handleSubmit}>
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
