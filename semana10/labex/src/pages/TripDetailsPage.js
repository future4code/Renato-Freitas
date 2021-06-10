import React, { useEffect, useState } from "react";
import axios from "axios";
import useProtectedPage from "../hooks/useProtectedPage";
import { BASE_URL } from "../constants/urls";

function TripDetailsPage(props) {
  const [trip, setTrip] = useState({});
  const tripId = props.match.params.id

  useProtectedPage();

  const getTripDetail = (id) => {
    axios
      .get(`${BASE_URL}/trip/${id}`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setTrip(res.data.trip);
      })
      .catch((err) => alert(err.response.data.message));
  };

  useEffect(() => {
    getTripDetail(tripId);
  }, []);

  return (
    <div>
      <h1>Detalhe da Viagem</h1>
      {trip.name ? trip.name : <p>Carregando...</p>}
    </div>
  );
}
export default TripDetailsPage;
