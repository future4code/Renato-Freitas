import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import { Load2 } from '../components/Perfil/styled'
import { urlGetMatches, urlClear } from "../services/api";
import {Container} from '../css/style'

const Matchs = (props) => {
  const [matches, setMatches] = useState([]);

  const clearMatch = () => {
    axios
      .put(urlClear)
      .then((res) => {
        alert("Lista de matchs apagadas!")
        getMatches()
      }).catch((err) => console.log(err));
  };

  const getMatches = async () => {
    try {
      const res = await axios.get(urlGetMatches);
      setMatches(res.data.matches);
    } catch (err) {
      alert(err.message);
    }
  };
  useEffect(() => {
    getMatches();
  }, []);
  const listaMatch = matches.map((match) => {
    return (
      <li key={match.id} className="flex p-4 items-center">
          <img className="w-8 h-8 rounded" src={match.photo} alt="foto-perfil"/>
          <p className="ml-2">
            {match.name}
          </p>
      </li>
    )
  });

  return (
    <Container className="flex flex-col items-center w-40 m-auto my-16 shadow rounded-lg">
      <Header />
      <h1 className="mt-8">Matches</h1>
      {{listaMatch} ? (
        <ul>{listaMatch}</ul> 

      ) : (
        <Load2>Carregando..</Load2>
      )}
      <button className="text-white font-bold rounded-full bg-red-400 my-4 p-4 hover:bg-red-300" onClick={clearMatch}>
        Apagar tudo!!
      </button>
    </Container>
  );
};
export default Matchs;
