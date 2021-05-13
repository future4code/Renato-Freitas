import React from 'react'
import styled from 'styled-components'
import './styles.css'
import { BiTrash } from "react-icons/bi";


const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
  button {
    cursor: pointer;
    border: none;
    background: transparent;
  }
`
const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: Date.now,
        texto: 'Texto da primeira tarefa',
        completa: false
      },
      {
        id: Date.now,
        texto: 'Texto da segunda tarefa',
        completa: false
      }
    ],
    inputValue: '',
    filtro: 'pendentes'
  }

  componentDidUpdate() {
    const tarefas = this.state.tarefas
    if (tarefas) {
      localStorage.setItem('tarefasSalvas', JSON.stringify(tarefas))
    }
  };

  componentDidMount() {
    let tarefasSalvas = localStorage.getItem('tarefasSalvas')
    if (tarefasSalvas) {
      tarefasSalvas = JSON.parse(tarefasSalvas)
      this.setState({ tarefas: tarefasSalvas })
    }
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  }
  criaTarefa = () => {
    const tarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const copiaDasTarefas = [...this.state.tarefas, tarefa]
    this.setState({ tarefas: copiaDasTarefas, inputValue: '' })
  }
  selectTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })
    this.setState({ tarefas: novaListaTarefas })
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto} <button onClick={this.apagarTarefa} ><BiTrash /></button>
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
