let tarefa = document.getElementsByClassName("tarefa")

function principal() {
    let contador = 0
    for (let i = 0; i < tarefa.length; i++) {
        if (tarefa[i].checked) {
            contador++
        }
    }
    document.getElementById("r").innerText = `Você completou ${contador} tarefas`
}