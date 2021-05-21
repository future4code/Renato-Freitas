import React from "react";
import { Container } from "./styled";
import { GlobalStyle } from "./styles/global";
import CreatePlayList from "./components/CreatePlayList/CreatePlayList";
import Header from "./components/Header/Header";
import PlayLists from "./components/PlayLists/PlayLists";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <CreatePlayList />
        <PlayLists />
        <GlobalStyle />
      </Container>
    );
  }
}
