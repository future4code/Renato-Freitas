import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import PerfilImage from './assets/perfil.png';
import CanPack from './assets/canpack.png';
import Durametal from './assets/durametal.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={PerfilImage}
          nome="Renato Marinho"
          descricao="Olá, eu sou o Renato. Sou estudante Web Fullstack na Labenu. Trabalho atualmente como Técnico de Qualidade em transição de carreira para a área da programação!"
        />
        <CardPequeno
          email="renato.marinhofr@gmail.com"
          cidade="Maranguape/CE"
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={CanPack}
          nome="Canpack"
          descricao="Técnico de Qualidade"
        />

        <CardGrande
          imagem={Durametal}
          nome="Durametal"
          descricao="Inspetor de Metrologia"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
