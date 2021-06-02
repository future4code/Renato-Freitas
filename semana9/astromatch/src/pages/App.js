import React, { useState } from "react";
import Perfil from "../components/Perfil/Perfil";
import Matchs from "../components/Matchs/Matchs";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center w-64 m-auto my-16 shadow">
      <Perfil />
      <Matchs />
    </div>
  );
};

export default App;
