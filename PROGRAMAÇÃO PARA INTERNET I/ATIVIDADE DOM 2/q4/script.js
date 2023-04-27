document.addEventListener('DOMContentLoaded', function(){
    var imgSelect = document.getElementById("select")
    imgSelect.addEventListener('change', Mostrar())

})

function Mostrar(){
    var resultado = document.getElementById('resultado')
    if (imgSelect.value === '') {
        resultado.innerHTML = '';
        return;
      }
    
      var img = document.createElement('img');
      img.src = imgSelect.value;
      resultado.innerHTML = '';
      resultado.appendChild(img);
    };
    
