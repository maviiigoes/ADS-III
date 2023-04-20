function trocarCores() {
    var corpo = document.body;
    
    if (corpo.style.color === "black") {
        corpo.style.color = "white";
        corpo.style.backgroundColor = "black";
    } else {
        corpo.style.color = "black";
        corpo.style.backgroundColor = "white";
    }
}