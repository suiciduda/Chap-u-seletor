const perguntas = [
    {
        texto: "Caminhas por um corredor de pedra onde as tochas se apagam à tua passagem. No fim, encontras uma porta sem maçaneta. Como escolhes atravessar o limiar?",
        opcoes: [
            { texto: "Bato com o punho cerrado, pronto para enfrentar o perigo.", casa: "grifinoria" },
            { texto: "Analiso as runas gravadas na pedra, procurando o mecanismo.", casa: "corvinal" },
            { texto: "Murmuro palavras de poder, moldando a porta à minha vontade.", casa: "sonserina" },
            { texto: "Espero pacientemente que a porta se abra para quem tem cortesia.", casa: "lufalufa" }
        ]
    },
    {
        texto: "Olhas para um espelho envolto em névoa que reflete o teu maior desejo. O que vês na moldura de prata?",
        opcoes: [
            { texto: "Eu mesmo no topo de uma montanha, com a bandeira da vitória.", casa: "grifinoria" },
            { texto: "Uma biblioteca infinita com todos os segredos do cosmos.", casa: "corvinal" },
            { texto: "Um trono de onde governo com justiça e mão de ferro.", casa: "sonserina" },
            { texto: "Uma mesa farta, rodeada por amigos e família sob o sol.", casa: "lufalufa" }
        ]
    },
    {
        texto: "Numa floresta antiga, o caminho bifurca-se. Onde os teus pés te levam antes da lua subir?",
        opcoes: [
            { texto: "O trilho iluminado por relâmpagos, onde o desafio reside.", casa: "grifinoria" },
            { texto: "O caminho que serpenteia por observatórios abandonados.", casa: "corvinal" },
            { texto: "O atalho sombrio que promete a rota mais rápida ao topo.", casa: "sonserina" },
            { texto: "O caminho largo e florido que passa pelas aldeias.", casa: "lufalufa" }
        ]
    },
    {
        texto: "Sobre um altar de mármore, repousam quatro artefactos. Apenas um pode ser teu. Qual reclamas?",
        opcoes: [
            { texto: "Uma espada de aço dobrado que nunca perde o fio.", casa: "grifinoria" },
            { texto: "Um pergaminho que contém uma pergunta sem resposta.", casa: "corvinal" },
            { texto: "Um anel que permite influenciar os pensamentos alheios.", casa: "sonserina" },
            { texto: "Uma taça de madeira que nunca deixa de transbordar água.", casa: "lufalufa" }
        ]
    },
    {
        texto: "Como gostarias de ser lembrado nos versos de uma lenda daqui a mil anos?",
        opcoes: [
            { texto: "Pela coragem indomável perante a escuridão.", casa: "grifinoria" },
            { texto: "Pela sabedoria que guiou nações perdidas.", casa: "corvinal" },
            { texto: "Pela astúcia que permitiu erguer um legado do nada.", casa: "sonserina" },
            { texto: "Pela bondade que curou as feridas do mundo.", casa: "lufalufa" }
        ]
    }
];

const detalhesCasas = {
    grifinoria: { nome: "Grifinória", desc: "Onde habitam os de coração indômito. Tua bravura ecoará pelos salões de pedra." },
    corvinal: { nome: "Corvinal", desc: "Onde a mente e o aprendizado são soberanos. Teu intelecto será tua bússola." },
    sonserina: { nome: "Sonserina", desc: "Onde os astutos usam os meios para alcançar a grandeza. Teu destino é o poder." },
    lufalufa: { nome: "Lufa-Lufa", desc: "Onde a paciência e a lealdade são a base de tudo. Tua justiça será tua força." }
};

let perguntaAtual = 0;
let pontuacao = { grifinoria: 0, corvinal: 0, sonserina: 0, lufalufa: 0 };

function mostrarPergunta() {
    const p = perguntas[perguntaAtual];
    document.getElementById('pergunta').innerText = p.texto;
    const botoes = document.querySelectorAll('.btn-opcao');
    
    p.opcoes.forEach((opcao, index) => {
        botoes[index].innerText = opcao.texto;
        botoes[index].onclick = () => responder(opcao.casa);
    });
}

function responder(casa) {
    pontuacao[casa]++;
    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        finalizar();
    }
}

function finalizar() {
    document.getElementById('quiz').classList.add('hidden');
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.classList.remove('hidden');

    const vencedora = Object.keys(pontuacao).reduce((a, b) => pontuacao[a] > pontuacao[b] ? a : b);
    
    document.getElementById('casa-nome').innerText = detalhesCasas[vencedora].nome;
    document.getElementById('descricao').innerText = detalhesCasas[vencedora].desc;
}

function resetar() {
    perguntaAtual = 0;
    pontuacao = { grifinoria: 0, corvinal: 0, sonserina: 0, lufalufa: 0 };
    document.getElementById('quiz').classList.remove('hidden');
    document.getElementById('resultado').classList.add('hidden');
    mostrarPergunta();
}

mostrarPergunta();
