import React from 'react'
import styled from 'styled-components'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'

const NovoPost = styled.div`
  margin: 1rem;

  input {
    border: 1px solid;
    padding: 5px;
    margin-left: 10px;
    margin-bottom: 10px;
    border-radius: 0.8rem;
  }
  button {
    margin: 1rem;
    cursor: pointer;
  }
`

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    usuarios: [
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150',
        id: Math.floor((Math.random() * 10) + 1)
      },
      {
        nomeUsuario: 'Renato',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151',
        id: Math.floor((Math.random() * 10) + 1)
      },
      {
        nomeUsuario: 'Caio',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/152',
        id: Math.floor((Math.random() * 10) + 1)
      }
    ],
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {
    let numeroCurtidas2

    if (this.state.curtido) {
      numeroCurtidas2 = this.state.numeroCurtidas - 1
    } else {
      numeroCurtidas2 = this.state.numeroCurtidas + 1
    }
    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: numeroCurtidas2
    })
    console.log('Curtiu!')
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }
  handleNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };
  handleFotoPerfil = (event) => {
    this.setState({ inputFotoPerfil: event.target.value });
  };
  handlePost = (event) => {
    this.setState({ inputPost: event.target.value });
  };
  onClickAdicionar = () => {
    const novoUsuario = {
      nomeUsuario: this.state.inputNome,
      fotoUsuario: this.state.inputFotoPerfil,
      fotoPost: this.state.inputPost,
      id: Math.floor((Math.random() * 10) + 1)
    }



    this.setState({
      usuarios: [...this.state.usuarios, novoUsuario],
      inputNome: "",
      inputFotoPerfil: "",
      inputPost: ""
    })
  }


  render() {

    let iconeCurtida

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }
    const listaUsuarios = this.state.usuarios.map((usuario) => {
      return (             
        <PostContainer>      
          <PostHeader>
            <UserPhoto src={usuario.fotoUsuario} alt={'Imagem do usuario'} />
            <p>{usuario.nomeUsuario}</p>
          </PostHeader>

          <PostPhoto src={usuario.fotoPost} alt={'Imagem do post'} />

          <PostFooter>
            <IconeComContador
              icone={iconeCurtida}
              onClickIcone={this.onClickCurtida}
              valorContador={this.state.numeroCurtidas}
            />

            <IconeComContador
              icone={iconeComentario}
              onClickIcone={this.onClickComentario}
              valorContador={this.state.numeroComentarios}
            />
          </PostFooter>
          {componenteComentario}
        </PostContainer>
      )
    })

    return (     
      <NovoPost>
        <input 
          placeholder={"Nome"}
          value={this.state.inputNome}
          onChange={this.handleNome}
        />
        <input 
          placeholder={"Link foto perfil"}
          value={this.state.inputFotoPerfil}
          onChange={this.handleFotoPerfil}
        />
        <input 
          placeholder={"Link do post"}
          value={this.state.inputPost}
          onChange={this.handlePost}
        />
        <button onClick={this.onClickAdicionar}>Novo Post</button>
        {listaUsuarios}
      </NovoPost>
    )
  }
}

export default Post