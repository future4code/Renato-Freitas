import React from 'react'
import styled from 'styled-components'
import CreateUsers from './components/CreateUsers'
import ListUsers from './components/ListUsers'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  button {
    cursor: pointer;
    margin-top: 1rem;
  }
`

export default class App extends React.Component {
  state = {
    page: 'createUser'
  }
  changePage = () => {
    if (this.state.page === "createUser") {
      this.setState({ page: "usersList" });
    } else if (this.state.page === "usersList") {
      this.setState({ page: "createUser" });
    }
  };
  renderizaPagina = () => {
    switch (this.state.page) {
      case "createUser":
        return <CreateUsers />;
      case "usersList":
        return <ListUsers />;
      default:
        return <div></div>;
    }
  };
  render() {
    return (
      <Container>
        <h1>Labenusers</h1>
        <button onClick={this.changePage}>Trocar de página</button>
        {this.renderizaPagina()}
      </Container>
    );
  }
}
