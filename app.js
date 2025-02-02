let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value.trim();

    // Validar entrada vazia
    if (nome === '') {
        alert('Por favor, insira um nome antes de adicionar');
        return;
    }

    // Confere se o nome está repetido
    if (amigos.includes(nome)) {
        let resposta = prompt('Esse nome já existe na sua lista de amigos secretos. Quer adicionar assim mesmo? [S]im ou [N]ão').toLowerCase();
        if (resposta !== 's') {
            limparCampo();
            return;
        }
    }

    amigos.push(nome);
    limparCampo();
    criarLista();
    atualizarEstadoBotao(); // Atualiza o botão de sorteio
}

// Função que limpa o campo onde se escreve o nome do amigo
function limparCampo() {
    document.getElementById('amigo').value = '';
}

// Função que cria a lista de amigos no HTML
function criarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

// Função que ativa ou desativa o botão de sorteio
function atualizarEstadoBotao() {
    let botaoSortear = document.getElementById('botaoSortear');
    if (amigos.length < 2) {
        botaoSortear.disabled = true;
        botaoSortear.classList.add('button-draw'); // Adiciona a classe para estilo desabilitado
    } else {
        botaoSortear.disabled = false;
        botaoSortear.classList.remove('button-draw'); // Remove a classe quando habilitado
    }
}

// Função que sorteia o amigo e mostra no HTML
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois nomes antes de sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceAleatorio];

    // Limpa a lista no HTML
    document.getElementById('listaAmigos').innerHTML = '';

    // Limpa o array de amigos
    amigos = [];

    // Exibe o nome sorteado
    document.getElementById('resultado').innerHTML = `🎉 ${nomeSorteado} 🎉`;

    // Atualiza o botão após limpar a lista
    atualizarEstadoBotao();

    // Dispara a animação de confetes
    soltarConfete();
}

// Função que solta confetes
function soltarConfete() {
    let count = 200;
    let defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
        });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
}
