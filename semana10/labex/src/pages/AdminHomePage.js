import React, { useEffect, useState } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom'
import useProtectedPage from "../hooks/useProtectedPage";
import { BASE_URL } from "../constants/urls";
import useRequestData from "../hooks/useRequestData";

function AdminHomePage() {
  useProtectedPage();

  const viagens = useRequestData([], `${BASE_URL}/trips`);

  const history = useHistory()

  const goToDetailPage = (tripId) => {
    history.push(`/admin/trips/${tripId}`)
  }

  const listTrips =
    viagens.trips &&
    viagens.trips.map((trip) => {
      return <li key={trip.id} onClick={(() => goToDetailPage(trip.id))}>{trip.name}</li>;
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
