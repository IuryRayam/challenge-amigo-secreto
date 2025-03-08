let amigos = [];

function adicionarAmigo() {
    let input = document.querySelector("input").value;

    if (input !== null && input !== "") {
        amigos = input.split(",").map(amigo => amigo.trim());

        let campolistaamigo = document.querySelector("#listaAmigos");

        amigos.forEach(amigo => {
            let li = document.createElement("li");
            li.textContent = amigo;
            campolistaamigo.appendChild(li);
        });
        
    } else {
        alert('Erro, tente inserir um valor no campo!');
    }

    limparCampo();
}

function limparCampo() {
    let input = document.querySelector("input");
    input.value = "";
}
