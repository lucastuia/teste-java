//obrigatorio add no código javascript - jquery
$(document) .ready(function(){
    //adicionar o código javascript - jquery dentro do document.ready
    $('#btnClique').click(function(){
       //acao do clique no elemento definido
       alert('lucas da porra loca');

       //variavel
       var nome=prompt('Digite seu nome');
       alert(nome);
       $('mensagem').html('<div class="alert alert-warning" role="alert">'+nome+'</div>');
    });
});