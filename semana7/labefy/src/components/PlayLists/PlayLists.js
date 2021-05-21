import axios from "axios";
import React from "react";
import { Contents } from "./styled";
import { BASE_URL, header } from "../CreatePlayList/CreatePlayList";

export default class PlayLists extends React.Component {
  state = {
    playlists: []
  };

  getAllPlaylist = async () => {
    try {
      const response = await axios.get(BASE_URL, header);
      this.setState({ playlists: response.data.result.list });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const listaMusicas = this.state.playlists.map((playlist) => {
      return <p key={playlist.id}>{playlist.name}</p>;
    });
    return (
      <Contents>
        <h2>Playlists</h2>
        {listaMusicas}
      </Contents>
    );
  }
}
