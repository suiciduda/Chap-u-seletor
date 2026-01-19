document.addEventListener('DOMContentLoaded', function() {
    const perguntas = [
        { t: "Se você visse alguém sendo injustiçado na rua, o que faria?", o: [{t:"Interviria na hora, não importa o risco.", c:"grifinoria"}, {t:"Pensaria em um plano seguro para ajudar.", c:"corvinal"}, {t:"Avaliaria se ajudar me traz algum benefício.", c:"sonserina"}, {t:"Apoiaria a pessoa e veria se ela está bem.", c:"lufalufa"}] },
        { t: "Em um trabalho de grupo, qual é o seu papel?", o: [{t:"O que toma a frente e lidera com coragem.", c:"grifinoria"}, {t:"O que faz as pesquisas e traz as ideias.", c:"corvinal"}, {t:"O que garante que o grupo se destaque.", c:"sonserina"}, {t:"O que ajuda todos e mantém a harmonia.", c:"lufalufa"}] },
        { t: "O que você mais valoriza em uma pessoa?", o: [{t:"A bravura e a honestidade.", c:"grifinoria"}, {t:"A inteligência e a vontade de aprender.", c:"corvinal"}, {t:"A ambição e a liderança.", c:"sonserina"}, {t:"A lealdade e a gentileza.", c:"lufalufa"}] },
        { t: "Como você lida com um grande desafio?", o: [{t:"Vou com tudo, enfrentando meus medos.", c:"grifinoria"}, {t:"Analiso todos os lados antes de agir.", c:"corvinal"}, {t:"Uso minha astúcia para vencer.", c:"sonserina"}, {t:"Trabalho duro e sou paciente.", c:"lufalufa"}] },
        { t: "Se encontrasse uma carteira perdida, o que faria?", o: [{t:"Procuraria o dono imediatamente.", c:"grifinoria"}, {t:"Analisaria os documentos logicamente.", c:"corvinal"}, {t:"Veria se há algo útil para mim.", c:"sonserina"}, {t:"Esperaria por perto para ver se o dono volta.", c:"lufalufa"}] }
    ];

    let atual = 0;
    let pontos = { grifinoria: 0, corvinal: 0, sonserina: 0, lufalufa: 0 };

    const btnIniciar = document.getElementById('btn-iniciar');
    
    if(btnIniciar) {
        btnIniciar.onclick = function() {
            document.getElementById('tela-inicio').classList.add('hidden');
            document.getElementById('quiz').classList.remove('hidden');
            mostrarPergunta();
        };
    }

    function mostrarPergunta() {
        const p = perguntas[atual];
        document.getElementById('pergunta').innerText = p.t;
        const container = document.getElementById('opcoes-container');
        container.innerHTML = "";
        
        p.o.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = "btn-opcao";
            btn.innerText = opt.t;
            btn.onclick = function() {
                pontos[opt.c]++;
                atual++;
                if(atual < perguntas.length) mostrarPergunta();
                else finalizar();
            };
            container.appendChild(btn);
        });
    }

    function finalizar() {
        document.getElementById('quiz').classList.add('hidden');
        const res = document.getElementById('resultado');
        res.classList.remove('hidden');
        const win = Object.keys(pontos).reduce((a, b) => pontos[a] > pontos[b] ? a : b);
        document.body.className = 'resultado-' + win;
        
        const info = {
            grifinoria: ["Grifinória", "Suas roupas devem ser vermelhas e douradas.", "Você foi escolhido pela sua bravura e coragem inabalável."],
            corvinal: ["Corvinal", "Suas roupas devem ser azuis e bronze.", "Sua inteligência e sede de saber são seus maiores tesouros."],
            sonserina: ["Sonserina", "Suas roupas devem ser verdes e pratas.", "Sua ambição e astúcia te levarão a grandes conquistas."],
            lufalufa: ["Lufa-Lufa", "Suas roupas devem ser amarelas e pretas.", "Sua lealdade e bondade fazem do mundo um lugar melhor."]
        };

        document.getElementById('casa-nome').innerText = info[win][0];
        document.getElementById('frase-roupa').innerText = info[win][1];
        document.getElementById('descricao').innerText = info[win][2];
    }
});
