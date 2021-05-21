import React from "react";
import { ContainerPlayList } from "./styled";
import axios from "axios";
import { NotificationManager } from 'react-notifications';
import 'react-toastify/dist/ReactToastify.css'

export const BASE_URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
export const header = {
  headers: {
    Authorization: "renato-freitas-paiva"
  }
};

export default class PlayList extends React.Component {
  state = {
    inputNamePlaylist: ""
  };
  handleInputNamePlaylist = (event) => {
    this.setState({ inputNamePlaylist: event.target.value });
  };
  createPlaylist = async () => {
    try {
      const body = {
        name: this.state.inputNamePlaylist
      };
      const res = await axios.post(BASE_URL, body, header);
      console.log("playlist adicionada!")
      NotificationManager.success('Playlist adicionada com sucesso!')
    } catch (err) {
      console.log(err);
      NotificationManager.error('Falha ao adicionar a playlist')
    }
  };
  render() {
    return (
      <ContainerPlayList>
        <p>Criar nova playlist</p>
        <label>Título</label>
        <input
          value={this.state.inputNamePlaylist}
          onChange={this.handleInputNamePlaylist}
          type="text"
          placeholder="Dê um título a sua playlist"
        />
        <button onClick={this.createPlaylist}>Criar nova</button>
        <button>Ver playlists</button>
      </ContainerPlayList>
    );
  }
}
