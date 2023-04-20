var p = document.getElementById("paragrafo");

console.log(p)
console.log(p.nodeName)

var paragrafos = document.getElementsByTagName("p")

for(var i = 0 ;i<  paragrafos.length; i++){
    paragrafos[i].textContent = "novo texto"
}

var tabela = document.getElementsByTagName("table")[0];
var celulas = tabela.getElementsByTagName("td");

for (var i = 0; i < celulas.length; i += 3) {
  celulas[i].textContent = "Mudei!";
}