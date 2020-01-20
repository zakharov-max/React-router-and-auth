import React from "react";
import history from "../history";
import { Link } from "react-router-dom";
import { auth } from "../auth";

export const Layout = props => {
  const isAuthenticated = auth.check();

  const logout = () => {
    auth.delToken();
    history.push("/login");
  };

  return (
    <>
      <header className="sticky-top">
        <nav className="navbar navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <ul className="list-group list-group-horizontal-sm">
            <li className="list-group-item">
              <Link to="/">Home</Link>
            </li>
            {isAuthenticated && (
              <>
                <li className="list-group-item">
                  <Link to="/news">News</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/settings">Settings</Link>
                </li>
              </>
            )}

            {isAuthenticated ? (
              <li className="list-group-item">
                <Link onClick={logout}>Logout</Link>
              </li>
            ) : (
              <li className="list-group-item">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <div className={"container "}>{props.children}</div>
    </>
  );
};
