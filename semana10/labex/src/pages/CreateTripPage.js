import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useProtectedPage from "../hooks/useProtectedPage";
import useForm from "../hooks/useForm";
import { BASE_URL } from "../constants/urls";
import swal from "sweetalert";

function CreateTripPage() {
  useProtectedPage();
  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: 0,
  });

  const createTrip = (event) => {
    const token = window.localStorage.getItem("token");

    event.preventDefault();
    axios
      .post(`${BASE_URL}/trips`, form, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        swal(
          `A Viagem ${form.name}`,
          "foi criada com sucesso!",
          "success"
        ).then(() => {
          cleanFields();
          window.location.reload();
        });
      })
      .catch((error) => {
        swal(error, "Dados incompletos, retorne para o formulário!", "error");
      });
  };

  return (
    <div className="container mx-auto bg-gray-300">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex justify-center items-center">
          <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center font-bold">
              Criar viagem
            </h3>
            <form
              className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
              onSubmit={createTrip}
            >
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  for="nome"
                >
                  Nome
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="nome"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  placeholder="Nome"
                />
              </div>
              <select
                className="block text-gray-700 py-2 px-3 border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 w-full border rounded shadow mb-4"
                name="planet"
                value={form.planet}
                onChange={onChange}
                required
              >
                <option value="" disabled="" selected="">
                  Escolha um Planeta
                </option>
                <option value="Mercúrio">Mercúrio</option>
                <option value="Vênus">Vênus</option>
                <option value="Terra">Terra</option>
                <option value="Marte">Marte</option>
                <option value="Jupiter">Jupiter</option>
                <option value="Saturno">Saturno</option>
                <option value="Urano">Urano</option>
                <option value="Netuno">Netuno</option>
                <option value="Plutão">Plutão</option>
              </select>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  for="data"
                >
                  Data
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="data"
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  for="descricao"
                >
                  Descrição
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="descricao"
                  placeholder="Descrição"
                  name="description"
                  value={form.description}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label for="duration">Duração em dias</label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="duration"
                  placeholder="Duração"
                  name="durationInDays"
                  value={form.durationInDays}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="flex mb-6 text-center">
                <Link to="/admin/trips/list">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2 mr-4"
                  >
                    <span className="w-full">Voltar</span>
                  </button>
                </Link>
                <button className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2 ml-4">
                  <span className="w-full">Enviar</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateTripPage;
