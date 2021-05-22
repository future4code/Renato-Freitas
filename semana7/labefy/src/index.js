import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PlayLists from "./components/PlayLists/PlayLists";
import PlayListsTracks from "./components/PlayListTracks/PlayListTracks";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/playlists" exact component={PlayLists} />
      <Route path="/playlists/musicas" exact component={PlayListsTracks} />
    </Switch>
  </BrowserRouter>,
  rootElement
);
