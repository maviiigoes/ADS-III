document.addEventListener('DOMContentLoaded', function () {
    const BtSelecionar = document.getElementById('btSelecionar')
    BtSelecionar.document.addEventListener('click', Converter())
    
});

function Converter(){
    var select = document.getElementById('select').value
    var texto = document.getElementById('texto').value
    var convertendo = Convertendo(select,texto)
    document.getElementById('resultado').innerHTML = convertendo

};

function Convertendo(op, texto){
    if (op === "uppercase") {
        return texto.toUpperCase()
      } else if (op === "lowercase") {
        return texto.toLowerCase()
      }
}