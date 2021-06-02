import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import { urlGetMatches, urlClear } from "../../services/api";

const Matchs = (props) => {
  const [matches, setMatches] = useState([]);

  const clearMatch = () => {
    axios
      .put(urlClear)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    clearMatch();
  }, []);

  const getMatches = async () => {
    try {
      const res = await axios.get(urlGetMatches);
      setMatches(res.data.matches);
      console.log(res.data.matches);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMatches();
    console.log(matches);
  }, []);
  const listaMatch = matches.map((match) => {
    return <li key={match.id}>{match.name}</li>;
  });

  return (
    <div>
      <h1>Matches</h1>
      <ul>{listaMatch}</ul>
      <button className="rounded-full bg-blue-400 p-4" onClick={clearMatch}>
        Apagar tudo!!
      </button>
    </div>
  );
};
export default Matchs;
