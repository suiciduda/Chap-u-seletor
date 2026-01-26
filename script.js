const questions = [
    {
        q: "1: Durante as provas de fim de ano, você percebe que um de seus colegas estava usando uma pena encantada. Mesmo assim, você fica em primeiro lugar na turma, mas ele fica em segundo. O que você faz?",
        options: [
            { text: "Avise o professor imediatamente – colar é errado, não importa o quê.", house: "Hufflepuff" },
            { text: "Nada, mas se eu não tivesse ficado em primeiro lugar na turma, com certeza contaria ao professor.", house: "Slytherin" },
            { text: "Incentive o outro aluno a confessar ao professor o que fez.", house: "Gryffindor" },
            { text: "Dêem-lhes um \"toca aqui\" por terem conseguido levar a pena escondida para a prova.", house: "Ravenclaw" }
        ]
    },
    {
        q: "2: Você ficaria muito magoado(a) se alguém lhe chamasse de:",
        options: [
            { text: "Fraco", house: "Gryffindor" },
            { text: "Ignorante", house: "Ravenclaw" },
            { text: "Cruel", house: "Hufflepuff" },
            { text: "Tedioso", house: "Slytherin" }
        ]
    },
    {
        q: "3: Qual dessas citações de Dumbledore lhe chama a atenção?",
        options: [
            { text: "“Tenha pena dos vivos e, sobretudo, daqueles que vivem sem amor.”", house: "Hufflepuff" },
            { text: "“Na minha nada modesta opinião, as palavras são a nossa fonte mais inesgotável de magia.”", house: "Ravenclaw" },
            { text: "“Não importa o que alguém seja ao nascer, mas sim o que se torna.”", house: "Slytherin" },
            { text: "“Não adianta ficar preso a sonhos e esquecer de viver.”", house: "Gryffindor" }
        ]
    },
    {
        q: "4: Qual destas opções descreve com maior precisão a sua relação com os seus amigos mais próximos?",
        options: [
            { text: "Adoro estar rodeada de pessoas – quanto mais amigos eu tiver, melhor!", house: "Hufflepuff" },
            { text: "Tenho alguns amigos muito próximos em quem confiaria minha vida.", house: "Gryffindor" },
            { text: "Costumo ser cauteloso com pessoas novas, então não faço amizades com frequência.", house: "Ravenclaw" },
            { text: "Tenho feito amizade com pessoas que podem me ajudar a ter sucesso.", house: "Slytherin" }
        ]
    },
    {
        q: "5: O que você veria no Espelho de Ojesed?",
        options: [
            { text: "Eu, rodeado de riquezas.", house: "Slytherin" },
            { text: "Eu, rodeada pela minha amada família e amigos.", house: "Hufflepuff" },
            { text: "Eu, acima de tudo, sou o mais conhecedor.", house: "Ravenclaw" },
            { text: "Eu, vivendo uma aventura maravilhosa.", house: "Gryffindor" }
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
