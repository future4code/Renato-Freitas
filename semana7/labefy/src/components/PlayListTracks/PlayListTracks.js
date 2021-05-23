import React from "react";
import axios from "axios";
import styled from "styled-components";
import { ListMusic, Musics } from "./styled";
import { BASE_URL, header } from "../CreatePlayList/CreatePlayList";
import { GlobalStyle } from "../../styles/global";
import { MdDeleteForever } from "react-icons/md";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const Button = styled.button`
  display: flex;
  margin: 2rem auto;
  color: #0ff;
  padding: 1rem;
  background-color: rgba(229, 238, 255, 0.2);
  border-radius: 0.8rem;
  border: none;
  font-size: 1rem;
  :hover {
    background: rgba(229, 238, 255, 0.1);
  }
`;

export default class PlayListTracks extends React.Component {
  state = {
    tracksList: [],
    playlists: [],
    name: "",
    artist: "",
    url: "",
    playlistId: this.props.match.params
  };

  componentDidMount() {
    this.getPlaylistTrack();
  }

  componentDidUpdate() {
    this.getPlaylistTrack();
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
        `${BASE_URL}/${this.state.playlistId.playlistId}/tracks`,
        header
      );
      this.setState({ tracksList: response.data.result.tracks });
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  removeTrackFromPlaylist = (musicaId) => {
    axios
      .delete(
        `${BASE_URL}/${this.state.playlistId.playlistId}/tracks/${musicaId}`,
        header
      )
      .then((response) => {
        swal("", "Sua música foi deletada!", "success", {
          button: false,
          timer: 2000
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  addTrackToPlayList = async (playlistId) => {
    try {
      const body = {
        name: this.state.name,
        artist: this.state.artist,
        url: this.state.url
      };
      await axios.post(
        `${BASE_URL}/${this.state.playlistId.playlistId}/tracks`,
        body,
        header
      );
      swal("", "Sua música foi adicionada a playlist!", "success", {
        button: false,
        timer: 2000
      });
      this.setState({ name: "", artist: "", url: "" });
    } catch (error) {
      alert("Deu ruim");
      console.log(error);
    }
  };
  render() {
    const musicas = this.state.tracksList.map((musica) => {
      return (
        <div>
          <p>
            <span>Artista: </span>
            {musica.artist}
          </p>
          <p>
            <span>Música: </span> {musica.name}
          </p>
          <p>
            <audio controls>
              <source src={musica.url} type="audio/mp3" />
            </audio>
          </p>
          <button onClick={() => this.removeTrackFromPlaylist(musica.id)}>
            <MdDeleteForever size={30} />
          </button>
        </div>
      );
    });
    return (
      <>
        <Header />
        <Link to="/playlists">
          <Button>Voltar para playlists</Button>
        </Link>
        <ListMusic>
          <h2>Músicas desta playlist</h2>
          {musicas}
        </ListMusic>
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
            <button
              onClick={() => this.addTrackToPlayList(this.state.playlistId)}
            >
              Adicionar a playlist
            </button>
          </div>
        </Musics>
        <GlobalStyle />
      </>
    );
  }
}
