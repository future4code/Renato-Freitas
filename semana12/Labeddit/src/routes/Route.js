import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { PostPage } from "../pages/PostPage/PostPage";
import { FeedPage } from "../pages/FeedPage/FeedPage";
import { Header } from "../components/Header";

const RouteManager = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/cadastro" component={SignUpPage} />
        <Route exact path="/adicionar-post" component={PostPage} />
        <Route exact path="/posts" component={FeedPage} />
      </Switch>
    </BrowserRouter>
  );
};
export default RouteManager;
