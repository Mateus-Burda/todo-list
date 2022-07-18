
document.getElementById("submit-button").onclick = function adicionarTarefa(){
    var novoLi = document.createElement("li");novoLi.className="novoLi";// variavel para criar o li
    var inputTarefa = document.getElementById("nome-tarefa").value; // pega o valor do input e coloca como conteúdo da variavel
    var nomeTarefa = document.createTextNode(inputTarefa); //transforma o valor do input como texto
    var ulListaTarefas = document.getElementById("lista-tarefas");//Seleciona o <ul>
    novoLi.appendChild(nomeTarefa);//insere o texto dentro da tag <li>
    var checkbox = document.createElement("input");checkbox.type = "checkbox";checkbox.className = "checkbox"; // variavel para criar o input  e definir o tipo;
    novoLi.appendChild(checkbox);
    ulListaTarefas.appendChild(novoLi);//insere a tag com o conteúdo dentro do <ul>
}