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
      <div style={{margin:" 0 auto", width: "50%"}}>
        <form  onSubmit={e => handleSubmit(e)}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Login</label>
              <input type="text" className="form-control" name={"name"}/>
            </div>
            <div className="form-group col-md-6">
              <label>Password</label>
              <input type="password" className="form-control" name={"password"}/>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>

      </div>
    </Layout>
  );
};
