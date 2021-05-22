import React from "react";
import { ContainerPlayList } from "./styled";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";

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
      swal("", "Sua playlist foi criada!", "success", {
        button: false,
        timer: 2000
      });
    } catch (err) {
      swal("Houve um erro", "Tente outro nome", "error", {
        button: false,
        timer: 2000
      });
    }
    this.setState({ inputNamePlaylist: "" });
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
        <Link to="/playlists">
          <button>Ver playlists</button>
        </Link>
      </ContainerPlayList>
    );
  }
}
