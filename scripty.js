const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-de-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Qual é o nome da primeira vítima de william afton?",
        Altenativas: [
            {
                texto: "Charlie",
                afirmacao: "afirmacao"
            },
            {
                texto: "Elizabeth"
                afirmacao: "afirmacao"
            }

        ]
    },
    {
        enunciado: "O'Que Frisk tem de mais?",
        Altenativas: [
            {
                texto: "Determinacao",
                afirmacao: "afirmacao"
            },
            {
                texto: "Vontade genocida"
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Aonde o sonic apareceu pela primeira vez?",
        Altenativas: [
            {
                texto: "Num jogo de corrida",
                afirmacao: "afirmacao"
            },
            {
                texto: "No próprio jogo dele"
                afirmacao: "afirmacao"
            }

        ]
    },
    {
        enunciado: "Em que ano acontece os evento do filme Godzilla:destroy all monsters",
        Altenativas: [
            {
                texto: "1968",
                afirmacao: "afirmacao"
            },
            {
                texto: "1999"
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Jurassic Park foi revolucionário, pois ele utilizou...",
        Altenativas: [{
            texto: "Usou robôs gigantes de dinossauros",
            afirmacao: "afirmacao"
        },
        {
            texto: "Uma computação gráfica incrivel"
            afirmacao: "afirmacao"
        }
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

function msotreAlternativas() {
    for (const alternativas of perguntaAtual.alternativas) {
        const botaoAlternativas = decument.createElement("button")
        botaoAlternativas.textContent = alternativas.texto;
        botaoAlternativas.addEventListener("click", (){
            atual++;
            mostrePergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostrePergunta();
