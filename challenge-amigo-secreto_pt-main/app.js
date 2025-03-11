let amigos = [];

function adicionarAmigo() {
    let input = document.querySelector("input").value;

    if (input !== null && input !== "") {
        amigos.push(input);

        let campolistaamigo = document.querySelector("#listaAmigos");
        campolistaamigo.innerHTML = "";

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

function sortearAmigo() {
    let campolistaamigo = document.querySelector("#listaAmigos");
    campolistaamigo.innerHTML = "";

    if (amigos.length == 0) {
        alert('Adicione amigos antes de sortear!');
        return;
    }

    let numeroaleatorio = parseInt(Math.random() * amigos.length);
    console.log(numeroaleatorio);
    console.log(amigos[numeroaleatorio]);

    let resultado = document.querySelector("#resultado");
    let li = document.createElement("li");
    li.textContent = `Parabéns ${amigos[numeroaleatorio]} você foi a/o escolhida(o)`;

    resultado.appendChild(li);
}

function limparCampo() {
    let input = document.querySelector("input");
    input.value = "";
}
