import React from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Opinion from "../components/Opinion";

function HomePage() {
  return (
      <main class="dark:bg-gray-800 relative overflow-hidden h-screen">
        <div class="dark:bg-gray-800 flex relative z-20 items-center overflow-hidden mt-32">
          <div class="container mx-auto px-6 flex relative py-16">
            <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
              <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
              <h1 class="font-bebas-neue text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white">
                LabeX
              </h1>
              <p class="text-sm sm:text-base">
                Encontre as melhores viagens espaciais!
              </p>
              <div className="flex mt-6">
                <Link to="/viagens">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
                  >
                    <span className="w-full">Ver Viagens</span>
                  </button>
                </Link>
                <Link to="/login">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2 ml-4"
                  >
                    <span className="w-full">Área de Admin</span>
                  </button>
                </Link>
              </div>
            </div>
            <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
              <img
                src={Logo}
                class="max-w-xs md:max-w-sm m-auto"
                alt="logo-labex"
              />
            </div>
          </div>
        </div>
        <h3 className="container text-gray-800 mx-auto text-2xl">Depoimento de quem já viajou conosco: </h3>
        <Opinion />
      </main>
  );
}
export default HomePage;
