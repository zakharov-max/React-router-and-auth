import React from "react";
import { Switch, Route } from "react-router";
import { Home } from "./components/Home/home.js";
import { Login } from "./components/Login/login.js";
import { News } from "./components/News/news.js";
import { Settings } from "./components/Settings/settings.js";
import { PrivateRoute } from "./CustomRoutes";

function App() {
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/news" component={News} />
      <PrivateRoute path="/settings" component={Settings} />
    </Switch>
  );
}

export default App;
