const inputElement = document.querySelector(".nova-tarefa-input");
const addTarefaButton = document.querySelector(".nova-tarefa-button")
const containerTarefas = document.querySelector(".container-tarefas");


addTarefaButton.onclick = function novaTarefa() {
    const novoParagrafo = document.createElement("p");
    novoParagrafo.classList.add("paragrafo-tarefa")
    novoParagrafo.innerText = inputElement.value;
    
    if(inputElement.value.trim()===""){
        inputElement.setAttribute("placeholder","Insira uma tarefa valida")
        inputElement.classList.add("erro");
        addTarefaButton.classList.add("erro")
    }
    else if( isNaN(inputElement.value) == false){
        inputElement.classList.add("erro")
        inputElement.setAttribute("placeholder","Insira uma tarefa valida")
        addTarefaButton.classList.add("erro")

    }
    else{
        inputElement.classList.remove("erro");
        addTarefaButton.classList.remove("erro")

        console.log(Number(inputElement.value))

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
    
    inputElement.value = "";

    }


    document.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
           addTarefaButton.click();
        }})