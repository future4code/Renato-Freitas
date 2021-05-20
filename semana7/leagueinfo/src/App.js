import React from 'react'
import './App.css';
import axios from 'axios'

export default class App extends React.Component {

  state = {
    champions: {}
  }

  componentDidMount() {
    this.getChampions()
  }

  getChampions = async () => {
    const response = await axios.get('http://ddragon.leagueoflegends.com/cdn/11.10.1/data/pt_BR/champion.json')
    console.log('Champions: ', response.data.data)
  }

  render() {
    return (
      <div className="App">
        <h1>Champions League of Legends</h1>
      </div>
    );
  }
}
