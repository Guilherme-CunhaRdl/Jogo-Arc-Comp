let falasNarrador = [
    "* OH YES...",
    "* MAIS UM DESAFIANTE.",
    "* ESPERO QUE VOCÊ SAIBA O QUE ESTÁ FAZENDO.",
    "* PORQUE EU NÃO COSTUMO PEGAR LEVE.",
    "O JOGO CONSISTE EM UMA PERGUNTA COM 4 ALTERNATIVAS, ONDE APENAS UMA ESTÁ CORRETA.",
    "* VAMOS COMEÇAR.",
];

let vidaJogador = 100;
let vidaInimigo = 100;
let inimigoAtual = 0;
let perguntaAtual = 0;
let indiceFala = 0;

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

function IniciarJogo() {
    caixaDeTexto.innerHTML = falasNarrador[0];

    MudarJogo.innerHTML = `
    <div class="hud">

        <div class="infoJogador">

            <span>LV 1</span>

            <div class="vidaJogador">

                <span>HP</span>

                <div class="div_barraDeVida">

                    <div class="qtdVida" id="qtdVida"></div>

                </div>

                <span id="textoVida">100 / 100</span>

            </div>

        </div>

    </div>

    <div class="div_botoes" id="div_botoes">

        <button class="btnOpcao" onclick="proximaFala()">
            Próximo
        </button>

    </div>
    `;

    ArenaJogo.innerHTML = `
    
    <div class="personagem" id="imgPersonagens">
        <img src="assets/Mettaton.webp" >
    </div>

    `;
}

function proximaFala() {
    indiceFala++;

    if (indiceFala < falasNarrador.length) {
        caixaDeTexto.innerHTML = falasNarrador[indiceFala];
    } else {
        mostrarPergunta();
    }
}

function mostrarPergunta() {
    let pergunta = perguntas[perguntaAtual];

    caixaDeTexto.innerHTML = pergunta.pergunta;

    div_botoes.innerHTML = `

    <button class="btnOpcao" onclick="verificarResposta(0)">
        ${pergunta.alternativas[0]}
    </button>

    <button class="btnOpcao" onclick="verificarResposta(1)">
        ${pergunta.alternativas[1]}
    </button>

    <button class="btnOpcao" onclick="verificarResposta(2)">
        ${pergunta.alternativas[2]}
    </button>

    <button class="btnOpcao" onclick="verificarResposta(3)">
        ${pergunta.alternativas[3]}
    </button>

    `;
}

function verificarResposta(respostaEscolhida) {
    let pergunta = perguntas[perguntaAtual];

    if (respostaEscolhida == pergunta.correta) {
        caixaDeTexto.innerHTML = "* RESPOSTA CORRETA!";

        vidaInimigo -= 20;
    } else {
        caixaDeTexto.innerHTML = "* RESPOSTA ERRADA!";
        vidaJogador -= 20;
    }

    atualizarVida();

    perguntaAtual++;

    setTimeout(() => {
        verificarFim();
    }, 1000);
}

function atualizarVida() {
    qtdVida.style.width = vidaJogador + "%";

    textoVida.innerHTML = vidaJogador + " / 100";
}

function verificarFim() {
    if (vidaJogador <= 0) {
        telaDerrota();
        return;
    }

    if (vidaInimigo <= 0) {
        caixaDeTexto.innerHTML = "* INIMIGO DERROTADO!";

        div_botoes.innerHTML = "";
        setTimeout(() => {
            inimigoAtual++;

            proximoInimigo();
        }, 1500);
        return;
    }

    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        caixaDeTexto.innerHTML = "* VOCÊ RESPONDEU TODAS AS PERGUNTAS!";

        div_botoes.innerHTML = "";
    }
}

function proximoInimigo() {
    vidaInimigo = 100;

    if (inimigoAtual == 1) {
        imgPersonagens.innerHTML = `<img src="assets/metatton2.gif" style="width: 500px;">`;

        caixaDeTexto.innerHTML = "* VOCÊ NÃO É TÃO RUIM...";

        mostrarPergunta();
    } else if (inimigoAtual == 2) {
        imgPersonagens.innerHTML = `<img src="assets/metatton3.gif" style="width: 500px;">`;

        caixaDeTexto.innerHTML = "* O SHOW ESTÁ FICANDO INTERESSANTE.";

        mostrarPergunta();
    } else if (inimigoAtual >= 3) {
        telaVitoria();
    }
}

function telaVitoria() {
    ArenaJogo.innerHTML = `
    
    <div class="telaVitoria">

        <h1>VOCÊ VENCEU!</h1>

        <p>Metatton FOI DERROTADO.</p>

    </div>

    `;

    caixaDeTexto.innerHTML = "* O SHOW... TERMINOU.";

    div_botoes.innerHTML = "";
}

function telaDerrota() {
    ArenaJogo.innerHTML = `
    
    <div class="telaDerrota">

        <h1>GAME OVER</h1>

        <p>VOCÊ FOI DERROTADO.</p>

<button class="btnRestart" onclick="reiniciarJogo()">
    REINICIAR
</button>

    </div>

    `;

    caixaDeTexto.innerHTML = "";

    div_botoes.innerHTML = "";
}

function reiniciarJogo(){
    vidaJogador = 100;
    vidaInimigo = 100;
    inimigoAtual = 0;
    perguntaAtual = 0;
    indiceFala = 0;
    IniciarJogo();

}