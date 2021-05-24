import axios from "axios";
import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { Contents } from "./styled";
import { BASE_URL, header } from "../CreatePlayList/CreatePlayList";
import { MdDeleteForever, MdFolderOpen } from "react-icons/md";
import { GlobalStyle } from "../../styles/global";

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

export default class PlayLists extends React.Component {
  state = {
    playlists: []
  };
  componentDidMount() {
    this.getAllPlaylist();
  }
  componentDidUpdate() {
    this.getAllPlaylist();
  }

  addTrackToPlayList = async (playlistId) => {
    try {
      const body = {
        name: this.state.name,
        artist: this.state.artist,
        url: this.state.url
      };
      await axios.post(`${BASE_URL}/${playlistId}/tracks`, body, header);
      this.setState({ name: "", artist: "", url: "" });
    } catch (error) {
      console.log(error);
    }
  };

  deletePlaylist = (playlistId) => {
    axios
      .delete(`${BASE_URL}/${playlistId}`, header)
      .then((response) => {
        swal("", "Sua playlist foi deletada!", "success", {
          button: false,
          timer: 2000
        });
      })
      .catch((error) => {
        console.log(error);
      });
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
    const playlists = this.state.playlists.map((playlist) => {
      return (
        <p key={playlist.id}>
          <Link to={`/playlists/${playlist.id}`}>
            <button>
              <MdFolderOpen size={20} />
            </button>
          </Link>
          {playlist.name}
          <button onClick={() => this.deletePlaylist(playlist.id)}>
            <MdDeleteForever size={20} />
          </button>
        </p>
      );
    });
    return (
      <>
        <Header />
        <Contents>
          <h2>Playlists</h2>
          <Link to="/">
            <Button>Criar nova playlist</Button>
          </Link>
          <div>{playlists}</div>
          <GlobalStyle />
        </Contents>
      </>
    );
  }
}
