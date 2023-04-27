document.addEventListener('DOMContentLoaded', function () {
    var botaoExibir = document.getElementById('botaoExibir');
    botaoExibir.addEventListener('click', EstaVazia);
    });
    function exibirConteudo() {
    var conteudo = document.getElementById('caixaDeTexto').value;
    document.getElementById('conteudo').innerHTML = conteudo;
    }

    function EstaVazia(){
        if (document.getElementById('caixaDeTexto').value == ""){
            alert("Caixa de texto vazia!")
        }else{
            exibirConteudo()
        }
    }