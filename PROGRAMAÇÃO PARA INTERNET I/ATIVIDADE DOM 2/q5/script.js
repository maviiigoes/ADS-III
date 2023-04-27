function validarOp() {
    var opcoes = document.getElementsByName('op');
    let selecionada = false;
    
    for (let i = 0; i < opcoes.length; i++) {
      if (opcoes[i].checked) {
        selecionada = true;
        break;
      }
    }
    
    if (selecionada) {
      alert('Tudo certo!');
    } else {
      alert('Selecione uma opção!');
    }
  }
  

