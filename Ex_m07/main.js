function validarCampos() {
    let campoA = document.getElementById("campo-a").value;
    let campoB = document.getElementById("campo-b").value;
   
    if (campoA > campoB) {
        alert("ERRO! O numero do campo B precisar ser maior do que o campo A")
    } else {
        alert("OK!")
    }
}