import React from "react";
import { Link } from "react-router-dom";

function ListTripsPage() {
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
      <div className="py-8 h-full lg:flex items-center justify-between xl:px-0 px-4">
        <div className="h-full lg:w-1/3 lg:mr-8 lg:mb-0 mb-4">
          <div className="w-full h-96 relative">
            <div className="left-0 px-3 flex items-cente mb-3 justify-between bottom-0 w-full absolute z-20 pt-4"></div>
          </div>
          <div className="mt-12 shadow p-2">
            <h1 className="f-m-m text-2xl font-semibold leading-7">
              Sydney, Australia
            </h1>
            <p className="text-base f-m-m leading-loose mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. It has survived not only five centuries. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
        <div className="h-full lg:w-1/3 lg:mr-8 lg:mb-0 mb-4">
          <div className="w-full h-96 relative">
            <div className="left-0 px-3 flex items-center mb-3 justify-between bottom-0 w-full absolute z-20 pt-4"></div>
          </div>
          <div className="mt-12 shadow p-2">
            <h1 className="f-m-m text-2xl font-semibold leading-7">
              New York, USA
            </h1>
            <p className="text-base f-m-m leading-loose mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. It has survived not only five centuries. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
        <div className="h-full lg:w-1/3 lg:mr-8 lg:mb-0 mb-4">
          <div className="w-full h-96 relative">
            <div className="left-0 px-3 flex items-center mb-3 justify-between bottom-0 w-full absolute z-20 pt-4"></div>
          </div>
          <div className="mt-12 shadow p-2">
            <h1 className="f-m-m text-2xl font-semibold leading-7">
              Sydney, Australia
            </h1>
            <p className="text-base f-m-m leading-loose mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. It has survived not only five centuries. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ListTripsPage;
