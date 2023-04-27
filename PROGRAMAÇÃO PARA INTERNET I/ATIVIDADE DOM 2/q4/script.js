const imgSelect = document.getElementById("select")
    const resultado = document.getElementById('resultado')
    imgSelect.addEventListener('change',() =>{
      const nome = imgSelect.value;   
      const img = document.createElement('img');
      img.src = 'img/'+ nome
      resultado.innerHTML = '';
      resultado.appendChild(img);
    })



