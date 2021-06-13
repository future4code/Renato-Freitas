import React, { useEffect, useState } from "react";
import axios from "axios";
import useProtectedPage from "../hooks/useProtectedPage";
import { useHistory, useParams, Link } from "react-router-dom";
import { BASE_URL } from "../constants/urls";
import swal from "sweetalert";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

function TripDetailsPage() {
  const [tripDetail, setTripDetail] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [approved, setApproved] = useState([]);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    getTripDetailChosen();
  }, []);

  useProtectedPage();

  const getTripDetailChosen = (id) => {
    const token = window.localStorage.getItem("token");
    axios
      .get(`${BASE_URL}/trip/${params.id}`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setTripDetail(res.data.trip);
        setCandidates(res.data.trip.candidates);
        setApproved(res.data.trip.approved);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const aproveCandidate = (candidateId, name, aprov) => {
    const token = window.localStorage.getItem("token");
    const body = { approve: aprov };
    if (body.approve === false) {
      swal({
        title: `Deseja Reprovar a inscrição de ${name}?`,
        text: ` Os dados de ${name} Serão deletados definitivamente do sistema!`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios
            .put(
              `${BASE_URL}/trip/${params.id}/candidates/${candidateId}/decide`,
              body,
              {
                headers: {
                  auth: token,
                },
              }
            )
            .then((res) => {
              swal(
                `A inscrição de ${name} foi Reprovada!`,
                "Dados excluídos!",
                "error"
              );
              getTripDetailChosen();
            })
            .catch((error) => {
              alert(error);
            });
        } else {
          swal("Nada foi deletado!");
        }
      });
    } else if (body.approve === true) {
      axios
        .put(
          `${BASE_URL}/trips/${params.id}/candidates/${candidateId}/decide`,
          body,
          {
            headers: {
              auth: token,
            },
          }
        )
        .then((res) => {
          swal(
            "CANDIDATO ACEITO !",
            `Inscrição de ${name} foi Aprovada!`,
            "success"
          );
          getTripDetailChosen();
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  const allCandidates = candidates.map((candidate) => {
    return (
      <div className="flex flex-col items-center">
        <div className="">
          <img
            alt="profil"
            src="https://image.freepik.com/vetores-gratis/mao-moderna-desenhados-personagem-de-astronauta_23-2147900290.jpg"
            className="mx-auto object-cover rounded-full h-10 w-10 "
          />
        </div>
        <span className="text-gray-600 dark:text-gray-400 text-xs mt-2">
          {candidate.name}
        </span>
        <div className="flex">
          <button
            className="m-2 text-green-400 hover:text-green-600"
            onClick={() => aproveCandidate(candidate.id, candidate.name, true)}
          >
            <AiFillCheckCircle />
          </button>
          <button
            className="m-2 text-red-400 hover:text-red-600"
            onClick={() => aproveCandidate(candidate.id, candidate.name, false)}
          >
            <AiFillCloseCircle />
          </button>
        </div>
      </div>
    );
  });
  const approvedCandidates = approved.map((candidate) => (
    <div className="px-6 flex flex-col items-start sm:items-center sm:flex-row flex-wrap">
      <div className="flex items-center mb-4 lg:mb-0 mr-10">
        <div className="w-12 h-12 bg-cover rounded-md mr-3">
          <img
            src="https://media.istockphoto.com/photos/astronaut-in-outer-space-picture-id626103976?k=6&m=626103976&s=612x612&w=0&h=CZ5QRgNuLynuhfKRE9K9Xm4w67k9cW2A949JIRNri9g="
            alt
            className="rounded h-full w-full overflow-hidden shadow"
          />
        </div>
        <div>
          <p className="text-gray-800 dark:text-gray-100 text-base font-medium">
            {candidate.name}
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="flex m-auto mt-40 max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-2/3 p-4">
          <h1 className="text-gray-900 font-bold text-2xl">
            {tripDetail.name}
          </h1>
          <p>Duração: {tripDetail.durationInDays} dias.</p>
          <p className="mt-2 text-gray-600 text-sm">{tripDetail.description}</p>
          <div className="flex item-center mt-3">
            <h1 className="text-gray-700 font-bold text-xl">
              <span className="block text-sm text-gray-600">Data: </span>
              {tripDetail.date}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <Link to="/admin/trips/list">
          <button
            type="submit"
            className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2 mr-4"
          >
            <span className="w-full">Voltar</span>
          </button>
        </Link>
      </div>
      <div className="flex flex-col m-auto mt-20 max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <p className="flex flex-col mb-4 justify-center text-center text-gray-600 font-light dark:text-white text-xl font-medium mb-6">
          Candidatos pendentes
        </p>
        <div className="m-4">
          {allCandidates.length === 0 ? (
            <span className="flex justify-center text-gray-600">
              Não há nenhum candidato
            </span>
          ) : (
            allCandidates
          )}
        </div>
      </div>
      <div className="flex flex-col m-auto max-w-md p-8 m-4 bg-white shadow-lg rounded-lg overflow-hidden">
        <p className="flex flex-col mb-4 justify-center text-center text-gray-600 font-light dark:text-white text-xl font-medium mb-6">
          Candidatos aprovados
        </p>
        <div className="grid grid-cols-2 gap-4">
          {approvedCandidates.length === 0 ? (
            <span className="flex justify-center text-gray-600">
              Não há candidatos aprovados
            </span>
          ) : (
            approvedCandidates
          )}
        </div>
      </div>
    </>
  );
}
export default TripDetailsPage;
