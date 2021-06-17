import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../constants/urls";
import useRequestData from "../hooks/useRequestData";

function ListTripsPage() {
  const viagens = useRequestData([], `${BASE_URL}/trips`);

  const listTrips =
    viagens.trips &&
    viagens.trips.map((trip) => {
      return (
        <div className="m-2 lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
          <div className="flex items-center border-b border-gray-200 pb-6">
            <img
              src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=827&q=80"
              alt="planeta"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex items-start justify-between w-full">
              <div className="pl-3 w-full">
                <p className="text-xl font-medium leading-5 text-gray-800">
                  {trip.name}
                </p>
                <p className="text-sm leading-normal pt-2 text-gray-500">
                  {trip.planet}
                </p>                
                <p className="text-sm leading-normal pt-2 text-gray-500">
                  Duração: {trip.durationInDays} dias.
                </p>
                <p className="text-sm leading-normal pt-2 text-gray-500">
                  Data: {trip.date}
                </p>
              </div>
            </div>
          </div>
          <div className="px-2">
            <p className="text-sm leading-5 py-4 text-gray-600">
              {trip.description}
            </p>
          </div>
        </div>
      );
    });

  return (
    <div className="mt-10 lg:mt-32 mx-auto container">
      <h1 className="lg:text-5xl text-2xl text-center f-m-w font-bold">
        Lista de Viagens
      </h1>
      <div className="flex justify-center items-center mt-4">
        <Link to="/">
          <button
            type="submit"
            className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2 mr-4"
          >
            <span className="w-full">Voltar</span>
          </button>
        </Link>
        <Link to="/viagens/inscrever">
          <button
            type="submit"
            className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2 ml-4"
          >
            <span className="w-full">Inscrever-se</span>
          </button>
        </Link>
      </div>
      <div className="py-8 w-full">
        <div className="flex flex-wrap m-2 items-center justify-center w-full">
          {listTrips}
        </div>
      </div>
    </div>
  );
}
export default ListTripsPage;
