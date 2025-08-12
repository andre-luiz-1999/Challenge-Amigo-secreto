//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    // Captura o elemento de entrada de texto
    let amigoInput = document.getElementById('amigo');
    let nomeAmigo = amigoInput.value.trim();

    // Valida se o campo de entrada não está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return; 
    }

    // Adiciona o nome do amigo ao array
    amigos.push(nomeAmigo);

    // Atualiza a lista de amigos na tela
    atualizarListaAmigos();

    // Limpa o campo de entrada para a próxima inserção
    amigoInput.value = "";
    amigoInput.focus();
}

function sortearAmigo() {
    // Valida se há amigos suficientes para o sorteio
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para realizar o sorteio.");
        return;
    }

    // Gera um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obtém o nome do amigo sorteado
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado do sorteio
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizar

    // Adiciona cada amigo como um item da lista
    amigos.forEach(amigo => {
        const item = document.createElement('li');
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}