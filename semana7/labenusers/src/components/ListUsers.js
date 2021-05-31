import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Lista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    ul {
      list-style-type: none;
      li {
        border: 1px solid;
        padding: 1rem;
        button {
          margin-left: 2rem;
        }
      }
    }
  }
`

export default class ListUsers extends React.Component {
  state = {
    usuarios: []
  }
  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = async() => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const header = {
      headers: {
        Authorization: "renato-freitas-paiva"
      }
    }
    /* axios.get(url, header)
      .then((res) => {
        this.setState({ usuarios: res.data })
      })
      .catch((err) => {
        alert(err)
      }) */
      try {
        const res = await axios.get(url, header)
          this.setState({ usuarios: res.data })
      } catch (err) {
          alert(err)
      }
  }
  deleteUser = (id) => {
    const header = {
      headers: {
        Authorization: "renato-freitas-paiva"
      }
    };
    if (window.confirm("Deseja mesmo deletar o usuário?")) {
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, header)
        .then((res) => {
          this.getAllUsers()
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  render() {
    const listUsers = this.state.usuarios.map((user) => {
      return (
        <div key={user.id}>
          <ul>
            <li>{user.name} <button onClick={() => this.deleteUser(user.id)}>X</button> </li>            
          </ul>
        </div>
      );
    });
    return (
      <Lista>
        <h2>Usuários cadastrados</h2>
        {listUsers}
      </Lista>
    )
  }
}