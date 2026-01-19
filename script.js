const perguntas = [
    {
        texto: "Se você visse alguém sendo injustiçado na rua, o que faria?",
        opcoes: [
            { texto: "Interviria na hora, não importa o risco.", casa: "grifinoria" },
            { texto: "Pensaria em uma forma inteligente de ajudar sem me expor.", casa: "corvinal" },
            { texto: "Avaliaria se ajudar me traria algum benefício ou problema.", casa: "sonserina" },
            { texto: "Apoiaria a pessoa e veria se ela está bem.", casa: "lufalufa" }
        ]
    },
    {
        texto: "Em um trabalho de grupo, qual é o seu papel?",
        opcoes: [
            { texto: "O que toma a frente e lidera com coragem.", casa: "grifinoria" },
            { texto: "O que faz as pesquisas e traz as ideias.", casa: "corvinal" },
            { texto: "O que garante que o grupo vença e se destaque.", casa: "sonserina" },
            { texto: "O que ajuda todo mundo e mantém a harmonia.", casa: "lufalufa" }
        ]
    },
    {
        texto: "O que você prefere fazer no seu tempo livre?",
        opcoes: [
            { texto: "Praticar esportes ou sair em uma aventura.", casa: "grifinoria" },
            { texto: "Ler, aprender algo novo ou jogar algo difícil.", casa: "corvinal" },
            { texto: "Organizar meus planos e metas para o futuro.", casa: "sonserina" },
            { texto: "Ficar com amigos, família ou cuidar do jardim.", casa: "lufalufa" }
        ]
    },
    {
        texto: "Como você lida com um grande desafio?",
        opcoes: [
            { texto: "Vou com tudo, enfrentando meus medos.", casa: "grifinoria" },
            { texto: "Analiso todos os lados antes de agir.", casa: "corvinal" },
            { texto: "Uso qualquer meio necessário para vencer.", casa: "sonserina" },
            { texto: "Trabalho duro e sou paciente até conseguir.", casa: "lufalufa" }
        ]
    },
    {
        texto: "Se encontrasse uma carteira perdida, qual seria sua reação?",
        opcoes: [
            { texto: "Procuraria o dono imediatamente, agindo com honra.", casa: "grifinoria" },
            { texto: "Olharia os documentos para achar o dono logicamente.", casa: "corvinal" },
            { texto: "Veria se há algo útil para mim primeiro.", casa: "sonserina" },
            { texto: "Esperaria por perto para ver se o dono volta buscando.", casa: "lufalufa" }
        ]
    }
];

const detalhesCasas = {
    grifinoria: { nome: "Grifinória", frase: "Suas roupas devem ser vermelhas e douradas.", desc: "Você foi escolhido pela sua bravura e coragem inabalável." },
    sonserina: { nome: "Sonserina", frase: "Suas roupas devem ser verdes e pratas.", desc: "Sua ambição e astúcia te levarão a grandes destinos." },
    corvinal: { nome: "Corvinal", frase: "Suas roupas devem ser azuis e bronze.", desc: "Sua inteligência e sede de saber são seus maiores tesouros." },
    lufalufa: { nome: "Lufa-Lufa", frase: "Suas roupas devem ser amarelas e pretas.", desc: "Sua lealdade, paciência e bondade são admiráveis." }
};

let perguntaAtual = 0;
let pontuacao = { grifinoria: 0, corvinal: 0, sonserina: 0, lufalufa: 0 };

function iniciarQuiz() {
    document.getElementById('tela-inicio').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    mostrarPergunta();
}

function mostrarPergunta() {
    const p = perguntas[perguntaAtual];
    document.getElementById('num-pergunta').innerText = perguntaAtual + 1;
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
    if (perguntaAtual < perguntas.length) { mostrarPergunta(); } 
    else { finalizar(); }
}

function finalizar() {
    document.getElementById('quiz').classList.add('hidden');
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.classList.remove('hidden');
    const vencedora = Object.keys(pontuacao).reduce((a, b) => pontuacao[a] > pontuacao[b] ? a : b);
    document.body.className = 'resultado-' + vencedora;
    document.getElementById('casa-nome').innerText = detalhesCasas[vencedora].nome;
    document.getElementById('frase-roupa').innerText = detalhesCasas[vencedora].frase;
    document.getElementById('descricao').innerText = detalhesCasas[vencedora].desc;
}

function resetar() {
    perguntaAtual = 0;
    pontuacao = { grifinoria: 0, corvinal: 0, sonserina: 0, lufalufa: 0 };
    document.body.className = '';
    document.getElementById('resultado').classList.add('hidden');
    document.getElementById('tela-inicio').classList.remove('hidden');
}
