document.addEventListener('DOMContentLoaded', function(){
    var btCalcular = document.getElementById('Calcular')
    btCalcular.addEventListener('click', Somar);
})

function Somar(){
    var v1 = Number(document.getElementById('caixaDeTexto').value);
    var v2 = Number(document.getElementById('caixaDeTexto2').value);
    var resultado = v1 + v2
    if(isNaN(resultado)){
        alert("Valor digitado não é um número!")
    }
    document.getElementById('resultado').innerHTML = resultado

    };
    
