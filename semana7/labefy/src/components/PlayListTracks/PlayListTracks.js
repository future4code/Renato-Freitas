import React from "react";
import axios from "axios";
import { Musics } from "./styled";
import { BASE_URL, header } from "../CreatePlayList/CreatePlayList";
import { GlobalStyle } from "../../styles/global";
import Header from "../Header/Header";

export default class PlayListTracks extends React.Component {
  state = {
    tracksList: [],
    playlists: [],
    name: "",
    artist: "",
    url: "",
    playlistId: ""
  };

  componentDidMount() {
    this.getAllPlaylist();
  }
  handleInputName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleInputArtist = (event) => {
    this.setState({ artist: event.target.value });
  };

  handleInputUrl = (event) => {
    this.setState({ url: event.target.value });
  };

  getAllPlaylist = async () => {
    try {
      const response = await axios.get(BASE_URL, header);
      this.setState({ playlists: response.data.result.list });
    } catch (err) {
      console.log(err);
    }
    console.log(this.state.playlists);
  };
  getPlaylistTrack = async (playlistId) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/${playlistId}/tracks`,
        header
      );
      this.setState({ tracksList: response.data.result.tracks });
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  addTrackToPlayList = async () => {
    try {
      const body = {
        name: this.state.name,
        artist: this.state.artist,
        url: this.state.url
      };
      await axios.post(
        `${BASE_URL}/${this.state.playlistId}/tracks`,
        body,
        header
      );
      this.setState({ name: "", artist: "", url: "" });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <>
        <Header />
        <Musics>
          <h2>Adicionar Músicas</h2>
          <div>
            <label>Nome: </label>
            <input
              value={this.state.name}
              onChange={this.handleInputName}
              type="text"
              placeholder="Nome da música"
            ></input>
            <label>Artista: </label>
            <input
              value={this.state.artist}
              onChange={this.handleInputArtist}
              type="text"
              placeholder="Artista"
            ></input>
            <label>Link da música: </label>
            <input
              value={this.state.url}
              onChange={this.handleInputUrl}
              type="text"
              placeholder="URL da música"
            ></input>
            <button /*onClick={() => this.addTrackToPlayList(playlist.id)}*/>
              Adicionar a playlist
            </button>
          </div>
        </Musics>
        <GlobalStyle />
      </>
    );
  }
}
