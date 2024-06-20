const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-de-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Qual é o nome da primeira vítima de william afton?",
        Altenativas: [
            "Charlie",
            "Elizabeth"
        ]
    },
    {
        enunciado: "O'Que Frisk tem de mais?",
        Altenativas: [
            "Determinação",
            "Vontade genocida"
        ]
    },
    {
        enunciado: "Aonde o sonic apareceu pela primeira vez?",
        Altenativas: [
            "Num jogo de corrida",
            "No próprio jogo dele"
        ]
    },
    {
        enunciado: "Em que ano acontece os evento do filme Godzilla:destroy all monsters",
        Altenativas: [
            "1999",
            "1968"
        ]
    },
    {
        enunciado: "Jurassic Park foi revolucionário, pois ele utilizou...",
        Altenativas: [
            "Uma computação gráfica incrivel",
            "Usou robôs gigantes de dinossauros"
        ]
    },
];


let atual = 0;
let perguntaAtual;


function mostrePergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado
    msotreAlternativas();
}

function msotreAlternativas(){
    for(const alternativas of perguntaAtual.alternativas){
        const botaoAlternativas = decument.createElement("button")
        botaoAlternativas.textContent = alternativas;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostrePergunta();