const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-de-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o nome da primeira vitima de wilian afton?",
        Altenativas: [
            "Charlie",
            "Elizabethy"
        ]
    },
    {
        enunciado: "Oque Frisk tem de mais?",
        Altenativas: [
            "Determinação",
            "Vontade genocida"
        ]
    },
    {
        enunciado: "Aonde o sonic apareceu pela pimeira vez?",
        Altenativas: [
            "Num jogo de corrida",
            "No proprio jogo dele"
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
        enunciado: "Jurrasic Park foi revocionario, pois ele utilizou...",
        Altenativas: [
            "Uma computação grafica incrivel",
            "Usou robos gigantes de dinosauros"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostrePergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado
}

mostrePergunta();