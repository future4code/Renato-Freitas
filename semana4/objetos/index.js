let posts = []
function criaPost() {
  let titulo = document.getElementById("titulo-post")
  let autor = document.getElementById("autor-post")
  let conteudo = document.getElementById("conteudo-post")
  let adicionarPost = document.getElementById("container-de-posts")
  let img = document.getElementById("img-post")
  const post = {
    titulo: titulo.value,
    autor: autor.value,
    conteudo: conteudo.value
  }

  if (post.titulo !== '' || post.autor !== '' || post.conteudo !== ''){
    adicionarPost.innerHTML += `<section class='post'> <h2>${post.titulo}</h2> <h3>${post.autor}</h3> <p>${post.conteudo} <img src="${img.value}">  </p> <section>`
  } else {
    alert('Preencha todos os campos!')
  }
  posts.push(post)
  titulo.value = ''
  autor.value = ''
  conteudo.value = ''
}