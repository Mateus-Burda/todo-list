const inputElement = document.querySelector(".nova-tarefa-input");
const addTarefaButton = document.querySelector(".nova-tarefa-button")
const containerTarefas = document.querySelector(".container-tarefas");

addTarefaButton.onclick = function novaTarefa() {
    const novoParagrafo = document.createElement("p");
    novoParagrafo.innerText = inputElement.value;

    const novoBotão = document.createElement("button");
    novoBotão.innerText = "X";
    novoBotão.classList.add("botao-tarefa")

    const novoDiv = document.createElement("div");
    novoDiv.classList.add("div-tarefa");
    novoDiv.appendChild(novoBotão);
    novoDiv.appendChild(novoParagrafo);

    containerTarefas.appendChild(novoDiv);
}
