document.addEventListener('DOMContentLoaded', function(){
    var BtMostra = document.getElementById('BtMostrar');
    var texto = document.getElementById('texto');

    BtMostra.addEventListener('click', Mostrar)
   /*  var result = document.getElementById('resultado')
    result.addEventListener('click', Mostrar); */
})

function Mostrar(){
    var imagem = document.getElementById('texto').value
    var img = document.createElement('img')
    img.src = "img/" + imagem
    document.getElementById('resultado').appendChild(img)

    
}