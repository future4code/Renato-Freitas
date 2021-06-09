import React, { useEffect, useState } from "react";
import axios from "axios";
import useProtectedPage from "../hooks/useProtectedPage";
import { BASE_URL } from "../constants/urls";

function TripDetailsPage() {
  const [trip, setTrip] = useState({});

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
    getTripDetail("0FlrxGY3SWsSDyuNVl8s");
  }, []);

  return (
    <div>
      <h1>Detalhe da Viagem</h1>
      {trip.name ? trip.name : <p>Carregando...</p>}
    </div>
  );
}
export default TripDetailsPage;
