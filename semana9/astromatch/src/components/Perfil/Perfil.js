import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Buttons from "../Buttons/Buttons";
import { Load, Load2 } from "./styled";
import { SiTinder } from "react-icons/si";
import { urlGetProfile, urlChoosePerson } from "../../services/api";

const Perfil = (props) => {
  const [profile, setProfile] = useState({});
  const [match, setMatch] = useState([]);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const res = await axios.get(urlGetProfile);
      setProfile(res.data.profile);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    choosePerson();
  }, []);

  const body = {
    id: profile.id,
    choice: true
  };

  const choosePerson = async () => {
    try {
      const res = await axios.post(urlChoosePerson, body);
      getProfile();
      setMatch(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-wrap flex-col rounded-xl justify-center items-center">
      <Header />
      {profile.photo ? (
        <img
          className="rounded w-64 h-60"
          src={profile.photo}
          alt="foto de perfil"
        />
      ) : (
        <Load>
          <SiTinder className="text-red-400 w-8 h-8" />
        </Load>
      )}
      <div className="">
        <Buttons getPerson={() => getProfile()} match={() => choosePerson()} />
      </div>
      {profile.name && profile.age ? (
        <div className="flex flex-col text-gray-700 flex justify-self-start self-start pl-2">
          <p className="pb-2 font-bold">
            {profile.name}, {profile.age}
          </p>
          <p className="font-bold text-sm">Sobre: </p>
          <p className="text-gray-600">{profile.bio}</p>
        </div>
      ) : (
        <Load2>Carregando..</Load2>
      )}
    </div>
  );
};
export default Perfil;
