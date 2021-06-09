import React, { useEffect, useState } from "react";
import axios from "axios";
import useProtectedPage from "../hooks/useProtectedPage";
import { BASE_URL } from "../constants/urls";
import useRequestData from "../hooks/useRequestData";

function AdminHomePage() {
  useProtectedPage();

  const viagens = useRequestData([], `${BASE_URL}/trips`);

  console.log(viagens.trips);

  const listTrips =
    viagens.trips &&
    viagens.trips.map((trip) => {
      return <li key={trip.id}>{trip.name}</li>;
    });

  return (
    <div>
      <h1>Painel administrativo</h1>
      <ul>
        {listTrips ? listTrips : "carregando..."}
      </ul>
    </div>
  );
}
export default AdminHomePage;
