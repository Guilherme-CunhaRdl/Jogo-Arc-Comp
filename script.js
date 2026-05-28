let falasNarrador = [
    "* OH YES...",
    "* MAIS UM DESAFIANTE.",
    "* ESPERO QUE VOCÊ SAIBA O QUE ESTÁ FAZENDO.",
    "* PORQUE EU NÃO COSTUMO PEGAR LEVE.",
    "O JOGO CONSISTE EM UMA PERGUNTA COM 4 ALTERNATIVAS, ONDE APENAS UMA ESTÁ CORRETA.",
    "* VAMOS COMEÇAR.",
];

let perguntas = [
    {
        pergunta:
            "QUAL É CONSIDERADO O “CÉREBRO” DO COMPUTADOR POR CONTROLAR E EXECUTAR TAREFAS?",

        alternativas: ["RAM", "CPU", "ROM", "DMA"],

        correta: 1,
    },

    {
        pergunta:
            "DENTRO DO PROCESSADOR, QUAL UNIDADE EXECUTA OPERAÇÕES COMO SOMA, COMPARAÇÃO E CÁLCULOS MATEMÁTICOS?",

        alternativas: ["ROM", "ULA", "FLASH", "DMA"],

        correta: 1,
    },

    {
        pergunta:
            "DENTRO DO PROCESSADOR, QUAIS ESTRUTURAS POSSUEM ARMAZENAMENTO RÁPIDO PARA AUXILIAR NA EXECUÇÃO DAS INSTRUÇÕES?",

        alternativas: ["REGISTRADORES", "RAM", "EPROM", "CS"],

        correta: 0,
    },

    {
        pergunta:
            "ONDE OS DADOS TEMPORÁRIOS DESTE PRÓPRIO JOGO ESTÃO ARMAZENADOS ENQUANTO ELE ESTÁ SENDO EXECUTADO?",

        alternativas: ["ROM", "RAM", "HD", "EPROM"],

        correta: 1,
    },

    {
        pergunta:
            "QUAL TIPO DE MEMÓRIA MANTÉM SUAS INFORMAÇÕES ARMAZENADAS MESMO APÓS O COMPUTADOR SER DESLIGADO?",

        alternativas: ["RAM", "ROM", "CACHE", "REGISTRADORES"],

        correta: 1,
    },

    {
        pergunta:
            "QUAL MEMÓRIA PODE SER REGRAVADA APÓS TER SUAS INFORMAÇÕES APAGADAS POR LUZ ULTRAVIOLETA?",

        alternativas: ["RAM", "FLASH", "EPROM", "ROM"],

        correta: 2,
    },

    {
        pergunta:
            "QUAL TIPO DE MEMÓRIA É UTILIZADA PARA ARMAZENAR DADOS PERMANENTEMENTE EM DISPOSITIVOS COMO PEN DRIVES E SSDS?",

        alternativas: ["FLASH", "RAM", "DMA", "ROM"],

        correta: 0,
    },

    {
        pergunta:
            "QUAL COMPONENTE É RESPONSÁVEL POR ARMAZENAR ARQUIVOS E DADOS DE FORMA PERMANENTE NO COMPUTADOR, COMO HDS E SSDS?",

        alternativas: ["MEMÓRIA DE MASSA", "CPU", "RAM", "CS"],

        correta: 0,
    },

    {
        pergunta:
            "QUAL TECNOLOGIA PERMITE QUE DISPOSITIVOS REALIZEM TRANSFERÊNCIA DE DADOS DIRETAMENTE PARA A MEMÓRIA SEM SOBRECARREGAR A CPU?",

        alternativas: ["DMA", "ROM", "FLASH", "ULA"],

        correta: 0,
    },

    {
        pergunta:
            "QUAL SINAL É UTILIZADO PARA SELECIONAR QUAL CHIP DEVE RESPONDER A UMA OPERAÇÃO DENTRO DE UM CIRCUITO ELETRÔNICO?",

        alternativas: ["DATA BUS", "CS", "DMA", "ROM"],

        correta: 1,
    },

    {
        pergunta:
            "QUAL BARRAMENTO É RESPONSÁVEL POR TRANSPORTAR OS ENDEREÇOS DE MEMÓRIA UTILIZADOS PELO PROCESSADOR?",

        alternativas: ["DATA BUS", "ADDRESS BUS", "FLASH", "DMA"],

        correta: 1,
    },

    {
        pergunta:
            "QUAL BARRAMENTO É RESPONSÁVEL PELA TRANSFERÊNCIA DE DADOS ENTRE OS COMPONENTES DO COMPUTADOR?",

        alternativas: ["CS", "DMA", "DATA BUS", "EPROM"],

        correta: 2,
    },

    {
        pergunta:
            "QUAL PROCESSADOR DA INTEL É CONHECIDO POR OFERECER DESEMPENHO INTERMEDIÁRIO E EQUILÍBRIO ENTRE CUSTO E PERFORMANCE?",

        alternativas: ["I7", "DUAL CORE", "I5", "QUAD CORE"],

        correta: 2,
    },

    {
        pergunta:
            "QUAL PROCESSADOR DA INTEL É CONHECIDO POR POSSUIR MAIOR DESEMPENHO E MAIS RECURSOS AVANÇADOS EM COMPARAÇÃO AO I5?",

        alternativas: ["I5", "I7", "DUAL CORE", "ROM"],

        correta: 1,
    },

    {
        pergunta:
            "QUAL TIPO DE PROCESSADOR POSSUI DOIS NÚCLEOS DE PROCESSAMENTO TRABALHANDO SIMULTANEAMENTE?",

        alternativas: ["QUAD CORE", "DUAL CORE", "I7", "FLASH"],

        correta: 1,
    },

    {
        pergunta:
            "QUAL TIPO DE PROCESSADOR POSSUI QUATRO NÚCLEOS DE PROCESSAMENTO CAPAZES DE EXECUTAR MÚLTIPLAS TAREFAS AO MESMO TEMPO?",

        alternativas: ["DUAL CORE", "I5", "QUAD CORE", "DMA"],

        correta: 2,
    },
];
let perguntaAtual = 0;
let indiceFala = 0;

function IniciarJogo() {
    MudarJogo.innerHTML = `    
    <div class="hud">

        <div class="infoJogador">

            <span>LV 1</span>

            <div class="vidaJogador">

                <span>HP</span>

                <div class="div_barraDeVida">
                    <div class="qtdVida"></div>
                </div>

                <span>20 / 20</span>

            </div>

        </div>

    </div>
    `;

    ArenaJogo.innerHTML = `
    <div class="personagem">
<img src="assets/Mettaton.webp">
</div>
`;

    MudarJogo.innerHTML += `    
    <div class="div_botoes" id="div_botoes">
        <button class="btnOpcao" onclick="proximaFala()" id="Opc1">
         Proximo
            </button>
            
            <button class="btnOpcao" onclick="proximaFala()" id="Opc2">
             Proximo
            </button>
            
            <button class="btnOpcao" onclick="proximaFala()" id="Opc3">
             Proximo
            </button>
            
            <button class="btnOpcao" onclick="proximaFala()" id="Opc4">
             Proximo
            </button> 
    </div>
    `;

}

function proximaFala() {

    indiceFala++;

    if (indiceFala < falasNarrador.length) {

        caixaDeTexto.innerHTML = falasNarrador[indiceFala];

    } else {

        div_botoes.innerHTML = `
        <button class="btnOpcao" onclick="verificarResposta(0)" id="Opc1"></button>

        <button class="btnOpcao" onclick="verificarResposta(1)" id="Opc2"></button>

        <button class="btnOpcao" onclick="verificarResposta(2)" id="Opc3"></button>

        <button class="btnOpcao" onclick="verificarResposta(3)" id="Opc4"></button>
        `;

        iniciarPergunta();
    }
}

function iniciarPergunta() {

    let pergunta = perguntas[perguntaAtual];

    caixaDeTexto.innerHTML = pergunta.pergunta;

    Opc1.innerHTML = pergunta.alternativas[0];

    Opc2.innerHTML = pergunta.alternativas[1];

    Opc3.innerHTML = pergunta.alternativas[2];

    Opc4.innerHTML = pergunta.alternativas[3];
}

function verificarResposta(respostaEscolhida){

    let pergunta = perguntas[perguntaAtual];

    if(respostaEscolhida == pergunta.correta){
         alert("* RESPOSTA CORRETA!");
        perguntaAtual++;
        iniciarPergunta();
    }else{
        alert("* RESPOSTA ERRADA!")
        perguntaAtual++;
        iniciarPergunta();
    }
}
