const questions = [
    {
        q: "Em um passeio, vocês percebem que pegaram o caminho errado. O que você faz?",
        options: [
            { text: "Tomo a frente e guio o grupo pelo caminho mais desafiador.", house: "Gryffindor" },
            { text: "Analiso o mapa para entender logicamente onde erramos.", house: "Ravenclaw" },
            { text: "Mantenho a calma e ajudo a tranquilizar quem estiver nervoso.", house: "Hufflepuff" },
            { text: "Sugiro o caminho que vai fazer a gente chegar mais rápido.", house: "Slytherin" }
        ]
    },
    {
        q: "Se um amigo te conta um segredo importante, como você reage?",
        options: [
            { text: "Incentivo meu amigo a enfrentar o problema de cabeça erguida.", house: "Gryffindor" },
            { text: "Ouve com atenção e tento dar um conselho sábio.", house: "Ravenclaw" },
            { text: "Guardo a sete chaves e defendo meu amigo sempre.", house: "Hufflepuff" },
            { text: "Guardo o segredo, pois informação pode ser útil no futuro.", house: "Slytherin" }
        ]
    },
    {
        q: "No seu tempo livre, o que você mais gosta de fazer?",
        options: [
            { text: "Praticar esportes, jogar ou fazer algo com adrenalina.", house: "Gryffindor" },
            { text: "Ler, aprender algo novo ou resolver desafios.", house: "Ravenclaw" },
            { text: "Estar com quem eu amo, cuidar de plantas ou de um pet.", house: "Hufflepuff" },
            { text: "Planejar meus objetivos ou focar em um projeto meu.", house: "Slytherin" }
        ]
    },
    {
        q: "Você encontra uma carteira perdida na rua. Qual seu primeiro pensamento?",
        options: [
            { text: "Vou procurar o dono agora mesmo, não importa o trabalho.", house: "Gryffindor" },
            { text: "Vou olhar os documentos para achar a pessoa de um jeito prático.", house: "Ravenclaw" },
            { text: "Vou entregar no lugar mais próximo para o dono não sofrer.", house: "Hufflepuff" },
            { text: "Vou devolver, pois fazer o certo traz reconhecimento e boas conexões.", house: "Slytherin" }
        ]
    },
    {
        q: "Qual dessas qualidades as pessoas mais elogiam em você?",
        options: [
            { text: "Minha coragem e o fato de eu não ter medo de me arriscar.", house: "Gryffindor" },
            { text: "Minha inteligência e o jeito como eu sempre sei as coisas.", house: "Ravenclaw" },
            { text: "Minha bondade e o fato de ser uma pessoa em quem todos confiam.", house: "Hufflepuff" },
            { text: "Minha determinação e o foco em conseguir o que eu desejo.", house: "Slytherin" }
        ]
    }
];

let currentQuestion = 0;
let scores = { Gryffindor: 0, Slytherin: 0, Ravenclaw: 0, Hufflepuff: 0 };

const houseInfo = {
    Gryffindor: {
        name: "Grifinória",
        colors: "Vermelho e Dourado",
        desc: "Você é uma pessoa brava e decidida. Não tem medo de desafios e sempre protege quem está ao seu lado."
    },
    Slytherin: {
        name: "Sonserina",
        colors: "Verde e Prata",
        desc: "Você é uma pessoa ambiciosa e astuta. Sabe exatamente onde quer chegar e usa sua inteligência para conquistar seus objetivos."
    },
    Ravenclaw: {
        name: "Corvinal",
        colors: "Azul e Bronze",
        desc: "Você valoriza o conhecimento e a sabedoria. Sua mente é curiosa e você sempre busca entender o mundo ao seu redor."
    },
    Hufflepuff: {
        name: "Lufa-Lufa",
        colors: "Amarelo e Preto",
        desc: "Você é uma pessoa leal, justa e muito paciente. Valoriza a amizade e o trabalho duro, sendo o porto seguro de muita gente."
    }
};

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question-title").innerText = q.q;
    const list = document.getElementById("options-list");
    list.innerHTML = "";
    
    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.innerText = opt.text;
        btn.onclick = () => {
            scores[opt.house]++;
            currentQuestion++;
            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                showResult();
            }
        };
        list.appendChild(btn);
    });
}

function showResult() {
    document.getElementById("question-box").classList.add("hidden");
    document.getElementById("intro-text").classList.add("hidden");
    const resultScreen = document.getElementById("result-screen");
    resultScreen.classList.remove("hidden");
    
    const winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const info = houseInfo[winner];
    
    const houseTitle = document.getElementById("house-result");
    houseTitle.innerText = info.name;
    houseTitle.className = winner;
    
    document.getElementById("house-colors").innerText = "Cor predominante: " + info.colors;
    document.getElementById("house-description").innerText = "O porquê você tirou essa casa: " + info.desc;
}

showQuestion();
