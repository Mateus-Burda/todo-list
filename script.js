const inputElement = document.querySelector(".nova-tarefa-input");
const addTarefaButton = document.querySelector(".nova-tarefa-button")
const containerTarefas = document.querySelector(".container-tarefas");

addTarefaButton.onclick = function novaTarefa() {
    const novoParagrafo = document.createElement("p");
    novoParagrafo.classList.add("paragrafo-tarefa")
    novoParagrafo.innerText = inputElement.value;

    const novoCheck = document.createElement("input");
    novoCheck.type = "checkbox";
    novoCheck.classList.add("check-tarefa")

    const novoDiv = document.createElement("div");
    novoDiv.classList.add("div-tarefa");
    novoDiv.appendChild(novoCheck);
    novoDiv.appendChild(novoParagrafo);

    containerTarefas.appendChild(novoDiv);

    novoCheck.addEventListener("click", () => {
        if(novoCheck.checked==true){
            containerTarefas.removeChild(novoDiv)
        }
    })
}
