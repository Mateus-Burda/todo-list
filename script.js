var contarTarefas = 0;
document.getElementById("submit-button").onclick = function adicionarTarefa(){
    contarTarefas += 1; console.log(contarTarefas);
    var pegarInput = document.getElementById("nome-tarefa").value //pegar o input
    var tranformarEmTexto = document.createTextNode(pegarInput);
    var checkbox = document.createElement("input");checkbox.type = "checkbox";checkbox.className = "checkbox";checkbox.setAttribute("id","tarefa"+contarTarefas); // variavel para criar o input  e definir o tipo;
    checkbox.appendChild(tranformarEmTexto);
    var label = document.createElement("label");label.appendChild(tranformarEmTexto);label.setAttribute("for","tarefa"+contarTarefas);label.setAttribute("class","checkbox")
    var divFazer = document.getElementById("fazer");
    var breakRow = document.createElement("br");

    divFazer.appendChild(checkbox);
    divFazer.appendChild(label);
    divFazer.appendChild(breakRow);
}
