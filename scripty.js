const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-de-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "1(Qual é o nome da primeira vítima de william afton?",
        Altenativas: [
            {
                texto: "Charlie",
                afirmacao: "1(acertou"
            },
            {
                texto: "Elizabeth"
                afirmacao: "1(errou"
            }

        ]
    },
    {
        enunciado: "2(O'Que Frisk tem de mais?",
        Altenativas: [
            {
                texto: "Determinacao",
                afirmacao: "2(acertou"
            },
            {
                texto: "Vontade genocida"
                afirmacao: "2(errou"
            }
        ]
    },
    {
        enunciado: "3(Aonde o sonic apareceu pela primeira vez?",
        Altenativas: [
            {
                texto: "3(acertou",
                afirmacao: "afirmacao"
            },
            {
                texto: "No próprio jogo dele"
                afirmacao: "3(errou"
            }

        ]
    },
    {
        enunciado: "4(Em que ano acontece os evento do filme Godzilla:destroy all monsters",
        Altenativas: [
            {
                texto: "4(errou",
                afirmacao: "afirmacao"
            },
            {
                texto: "1999"
                afirmacao: "4(acertou"
            }
        ]
    },
    {
        enunciado: "5(Jurassic Park foi revolucionário, pois ele utilizou...",
        Altenativas: [{
            texto: "Usou robôs gigantes de dinossauros",
            afirmacao: "5(errou"
        },
        {
            texto: "Uma computação gráfica incrivel"
            afirmacao: "5(acertou"
        }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let resultadoFinal = "";

function mostrePergunta() {
    if(atual >= perguntas.lenght){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado
    caixaAlternativas.textContent = "";
    mostreAlternativas();
}

function mostreAlternativas() {
    for(const alternativas of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativas.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativas))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opçãoSelecionada){
    const afirmacoes = opçãoSelecionada.afirmacoes;
    resultadoFinal += afirmacoes + " ";
    atual++;
    mostrePergunta();

}

function mostraResultado(){
    caixaPerguntas.textContent = "Você arcetou...";
    textoResultado.textContent = resultadoFinal;
    caixaAlternativas.textContent = "";
}

mostrePergunta();
