$(document).ready(function() {
    alert("Este alerta será exibido após o carregamento completo do documento!");

    // Adiciona um evento de clique ao botão "Cadastrar"
    $("#cadastrar").click(function() {
        // Captura o valor do campo de texto
        var novaTarefa = $("#nova-tarefa").val();
        // Cria um novo elemento <li> com o valor da nova tarefa
        var novoItem = "<li>" + novaTarefa + "</li>";
        // Adiciona o novo item na lista de tarefas
        $("#lista-tarefas").append(novoItem);
        // Limpa o campo de texto
        $("#nova-tarefa").val("");
    });
    
    // Adiciona um evento de clique aos itens da lista de tarefas
    $("#lista-tarefas").on("click", "li", function() {
        // Aplica o efeito de linha através da classe CSS
        $(this).toggleClass("tarefa-concluida");
    });
});