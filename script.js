
document.getElementById("submit-button").onclick = function adicionarTarefa(){
    var novoItem = document.createElement("li");// variavel para criar o li que vai ter a tarefa
    let inputTarefa = document.getElementById("nome-tarefa").value; // pega o valor do input e coloca como conteúdo da variavel
    var nomeTarefa = document.createTextNode(inputTarefa); //insere o valor como texto dentro da variavel
    novoItem.appendChild(nomeTarefa);//insere o texto dentro da tag <li>
    var listaTarefas = document.getElementById("lista-tarefas");//Insere a tag como conteúdo da variavel
    listaTarefas.appendChild(novoItem);//insere a tag com o conteúdo dentro do UL
}