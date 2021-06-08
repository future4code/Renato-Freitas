import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ListTripsPage from "../pages/ListTripsPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import AdminHomePage from "../pages/AdminHomePage";
import CreateTripPage from "../pages/CreateTripPage";
import TripDetailsPage from "../pages/TripDetailsPage";

const RouteManager = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/viagens" component={ListTripsPage} />
        <Route
          exact
          path="/viagens/inscrever"
          component={ApplicationFormPage}
        />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/admin-painel" component={AdminHomePage} />
        <Route
          exact
          path="/admin-painel/detalhes"
          component={TripDetailsPage}
        />
        <Route
          exact
          path="/admin-painel/criar-viagem"
          component={CreateTripPage}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default RouteManager;
