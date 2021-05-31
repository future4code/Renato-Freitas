import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;  
  button {
    cursor: pointer;
  }
  h2 {
    margin-top: 2rem;
  }
  div {
    align-items: center;
    justify-content: center;
    input {
      margin: 0.5rem;
      outline: none;
    }
  }
`
export default class CreateUsers extends React.Component {
  state = {
    users: [],
    inputName: "",
    inputEmail: ""
  }
  handleName = (event) => {
    this.setState({ inputName: event.target.value })
  }
  handleEmail = (event) => {
    this.setState({ inputEmail: event.target.value })
  }
  addNewUser = async() => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const header = {
      headers: {
        Authorization: "renato-freitas-paiva"
      }
    }
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }
    /* axios.post(url, body, header)
    .then((res) => {
      alert('Usuário cadastrado com sucesso!')
      this.setState({ 
        inputName: "",
        inputEmail: ""
    })    
    })
    .catch((err) => {
      alert(err)
    }) */
    try {
      const res = await axios.post(url, body, header)
        alert('Usuário cadastrado com sucesso!')
        this.setState({
          inputName: "",
          inputEmail: ""
        })
    } catch(err) {
        alert(err)
    }
  }
  render() {
    return (
      <Content>
        <h2>Cadastrar novo usuário</h2>
        <div>
          <input value={this.state.inputName} onChange={this.handleName} type="text" placeholder="Nome" />
          <input value={this.state.inputEmail} onChange={this.handleEmail} type="email" placeholder="Email" />
          <button onClick={this.addNewUser}>Criar</button>
        </div>
      </Content>
    );
  }
}
