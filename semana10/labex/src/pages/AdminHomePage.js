import React from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import useProtectedPage from "../hooks/useProtectedPage";
import { BASE_URL } from "../constants/urls";
import useRequestData from "../hooks/useRequestData";
import swal from "sweetalert";

function AdminHomePage() {
  useProtectedPage();
  const viagens = useRequestData([], `${BASE_URL}/trips`);
  const history = useHistory();

  const goToDetailPage = (tripId) => {
    history.push(`/admin/trips/${tripId}`);
  };

  const logout = () => {
    localStorage.setItem("token", "");
    history.push("/login");
  };

  const deleteTrip = (tripId, name) => {
    const token = window.localStorage.getItem("token");
    swal({
      title: `Deseja deletar a viagem ${name}?`,
      text: "Essa viagem será deletada junto com todos os dados de inscritos e aprovados!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`${BASE_URL}/trips/${tripId}`, {
            headers: {
              auth: token,
            },
          })
          .then((response) => {
            swal(
              `A Viagem ${name}`,
              "foi deletada com sucesso!",
              "success"
            ).then(() => {
              window.location.reload()
            });
          })
          .catch((error) => {
            alert(`Não foi possível executar o comando, tente mais tarde!`);
            history.push("/");
          });
      } else {
        swal("Nenhuma viagem foi deletada");
      }
    });
  };

  const listTrips =
    viagens.trips &&
    viagens.trips.map((trip) => {
      return (
        <div
          className="m-2 lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded"
          key={trip.id}
        >
          <div className="flex items-center border-b border-gray-200 pb-6">
            <img
              src="https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="rocket"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex items-start justify-between w-full">
              <div
                className="pl-3 w-full"
                onClick={() => goToDetailPage(trip.id)}
              >
                <p className="text-xl font-medium leading-5 text-gray-800 cursor-pointer">
                  {trip.name}
                </p>
              </div>
            </div>
          </div>
          <div className="px-24 mt-2">
            <button
              type="button"
              className="py-2 px-4 flex justify-center items-center  bg-red-500 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
              onClick={() => deleteTrip(trip.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
                className="mr-2"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
              Excluir
            </button>
          </div>
        </div>
      );
    });

  return (
    <div className="mt-10 lg:mt-32 mx-auto container">
      <h1 className="lg:text-5xl text-2xl text-center f-m-w font-bold">
        Painel Admistrativo
      </h1>
      <div className="flex justify-center items-center mt-4">
        <Link to="/login">
          <button className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2 mr-2">
            <span className="w-full">Voltar</span>
          </button>
        </Link>
        <Link to="/admin/trips-create">
          <button className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2 mx-2">
            <span className="w-full">Criar viagem</span>
          </button>
        </Link>
        <button
          className="px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2 mx-4"
          onClick={logout}
        >
          <span className="w-full">Logout</span>
        </button>
      </div>
      <div className="py-8 w-full">
        <div className="flex flex-wrap m-2 items-center justify-center w-full">
          {listTrips}
        </div>
      </div>
    </div>
  );
}
export default AdminHomePage;
