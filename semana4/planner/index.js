function createTask() {
  let day = document.getElementById("dias-semana").value
  let task = document.getElementById("tarefa").value
  if (task !== "") {
    document.getElementById(day).innerHTML += `<p> - ${task} </p>`
    document.getElementById("tarefa").value = ""
    document.getElementById("dias-semana").value = "domingo"    
  }  else {
    alert("Adicione uma tarefa!")
  }
}
function clean() {
  let days = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
  for (let day of days) {
    let container = document.getElementById(day)
    container.innerHTML = ''
  }
}