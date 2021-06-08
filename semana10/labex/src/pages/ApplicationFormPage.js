import React from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

function ApplicationFormPage() {
  return (
    <div className="container mx-auto bg-gray-300">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex justify-center items-center">
          <div className="w-full h-auto hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">
            <img className="pr-12" src={Logo} alt="logo-labex" />
          </div>
          <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center font-bold">
              Inscreva-se para uma viagem
            </h3>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <select className="block text-gray-700 py-2 px-3 border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 w-full border rounded shadow mb-4">
                <option value="">Escolha uma viagem</option>
                <option value="marte">Marte</option>
              </select>
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
                  type="nome"
                  placeholder="Nome"
                />
              </div>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    for="idade"
                  >
                    Idade
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="number"
                    name="idade"
                    required
                    min="18"
                    placeholder="Sua idade"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  for="texto"
                >
                  Texto de candidatura
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  type="texto"
                  placeholder="Escreva a sua motivação"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  for="profissao"
                >
                  Profissão
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Profissão"
                />
              </div>
              <div className="flex mb-6 text-center">
                <Link to="/viagens">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2 mr-4"
                  >
                    <span className="w-full">Voltar</span>
                  </button>
                </Link>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2 ml-4"
                >
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
export default ApplicationFormPage;
