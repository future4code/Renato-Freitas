import React from 'react'
import './App.css';
import axios from 'axios'

export default class App extends React.Component {

  state = {
    champions: [],
    image: ''
  }

  componentDidMount() {
    this.getChampions()
    this.getChampionImages()
  }

  getChampions = async () => {
    try {
      const response = await axios.get('http://ddragon.leagueoflegends.com/cdn/11.10.1/data/pt_BR/champion.json')
      this.setState({ champions: Object.values(response.data.data) })
    } catch (err) {
      console.log(err)
    }
  }

  getChampionImages = () => {
    const getImage = this.state.champions.map((champion) => {
      return this.setState ({ image: champion.image })
    })    
  }

  render() {
    //console.log(this.state.champions)
    const championList = this.state.champions.map((champion) => {
      return (
        <option key={champion.name} value={champion.image}>
          {champion.name}
        </option>
      )
    })
    //console.log(championList)
    return (
      <div className="App">
        <h1>Champions League of Legends</h1>
        <select>
          <option>Selecione um Campeão</option>
          {championList}
        </select>
        <img src={this.state.image}/>
      </div>
    );
  }
}
