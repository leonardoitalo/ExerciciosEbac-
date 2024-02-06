const botao = document.querySelector("button");

botao.onclick = function() { 
    let nome = document.getElementById("nome-contato").value;
    let telefone = document.getElementById("numero-contato").value;
    let novaLinha = `<tr><td>${nome}</td><td>${telefone}</td></tr>`;

    document.getElementById("tabela-dados").innerHTML += novaLinha;
    
    document.getElementById("nome-contato").value = "";
    document.getElementById("numero-contato").value = "";
}
