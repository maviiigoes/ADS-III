document.addEventListener('DOMContentLoaded', function(){
    var btadd = document.getElementById('add')
    btadd.addEventListener('click', Adicionar());
})

function Adicionar(){
    const texto = document.getElementById('texto')
    const option = document.createElement('option');
    option.text = texto;
    document.getElementById('select').appendChild(option)
    texto.value = '';

}