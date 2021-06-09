import React, { useState } from "react";
import Perfil from "../components/Perfil/Perfil";
import Header from '../components/Header/Header'
import {Container} from '../css/style'

const App = () => {
  return (
    <Container className="flex flex-col justify-center items-center w-3/12 m-auto my-16 shadow rounded-lg">
      <Header />
      <Perfil />
    </Container>
  );
};

export default App;
