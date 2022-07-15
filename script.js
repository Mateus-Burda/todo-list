
document.getElementById("submit-button").onclick = function adicionarTarefa(){
    var novoItem = document.createElement("li");// variavel para criar o li
    var inputTarefa = document.getElementById("nome-tarefa").value; // pega o valor do input e coloca como conteúdo da variavel
    var nomeTarefa = document.createTextNode(inputTarefa); //transforma o valor do input como texto
    var listaTarefas = document.getElementById("lista-tarefas");//Seleciona o UL
    novoItem.appendChild(nomeTarefa);//insere o texto dentro da tag <li>
    listaTarefas.appendChild(novoItem);//insere a tag com o conteúdo dentro do UL
}