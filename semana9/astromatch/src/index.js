import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./css/index.css";
import App from "./pages/App";
import Matchs from './pages/Matchs'

ReactDOM.render(
<BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/matchs" component={Matchs} />
    </Switch>
</BrowserRouter>, document.getElementById("root"));
