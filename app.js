//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigo = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value.trim();
    //validar entrada vazia
    if (nome === '') {
        alert('Por favor, insira um nome antes de adicionar');
        return;
    } 
    if (amigo.includes(nome)) {
        let resposta = prompt('Esse nome já existe na sua lista de amigos secretos, quer adicionar assim mesmo ? [S]im ou [N]ão').toUpperCase();
        if (resposta !== 'S') {
            limparCampo();
            return;
        }
    } 

    amigo.push(nome)
    limparCampo();
    criarLista();
    }

function limparCampo() {
    let nome = document.getElementById('amigo');
    nome.value = '';
}


function criarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0 ; i < amigo.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigo[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigo.length == 0 ) {
        alert('Precisa colocar o nome de seus amigos para sortear o amigo secreto');
    } else {
        let IndiceAleatorio = parseInt(Math.floor(Math.random() * amigo.length));
        let nomeSorteado = amigo[IndiceAleatorio];
        let amigoSecreto = document.getElementById('resultado');
        amigoSecreto.innerHTML = nomeSorteado;
    }
}