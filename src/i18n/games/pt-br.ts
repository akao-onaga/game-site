import type { GameTranslation } from "../game";

export const ptBrGames: Record<string, GameTranslation> = {
  "reverse-typing": {
    title: "REVERSE TYPING",
    catch: "A vira Z, B vira Y. Digite em um alfabeto invertido.",
    genre: "Digitação",
    dialogue: [
      { speaker: "onaga", text: "O que muda em relação a um jogo de digitação normal?" },
      {
        speaker: "akao",
        text: "Cada tecla é invertida no alfabeto: A vira Z, B vira Y e assim por diante.",
      },
      { speaker: "onaga", text: "Eu aperto A e aparece Z? Minha cabeça vai dar um nó." },
      {
        speaker: "akao",
        text: "Esse é o desafio. Digite o máximo de palavras antes do tempo acabar e suba no ranking. Foi o primeiro jogo do projeto de 100 jogos.",
      },
    ],
    features: [
      "Treino de digitação com alfabeto invertido",
      "Ranking on-line",
    ],
    controls: [
      { label: "Iniciar", text: "Digite um nome e selecione START" },
      { label: "Digitar", text: "Use o teclado para inserir as letras exibidas" },
    ],
    notes: ["Todas as letras são avaliadas ao contrário: A↔Z, B↔Y e assim por diante."],
  },
  "giri-strike": {
    title: "Giri Strike",
    catch: "Arremesse o mais perto possível da borda da zona de strike.",
    genre: "Esportes",
    dialogue: [
      { speaker: "onaga", text: "Um jogo de beisebol! Como eu jogo?" },
      {
        speaker: "akao",
        text: "Faça um strike bem na borda. Quanto mais perto do limite, mais pontos você ganha.",
      },
      { speaker: "onaga", text: "Então posso arremessar sempre no mesmo lugar, certo?" },
      {
        speaker: "akao",
        text: "Não exatamente. Repetir posição ou tipo de arremesso facilita a rebatida. Alterne entre os seis arremessos.",
      },
    ],
    features: [
      "Seis tipos de arremesso",
      "Repetir posição ou arremesso aumenta a chance de rebatida",
      "Escolha de estilo de controle antes de começar",
    ],
    controls: [
      { label: "Escolher arremesso", text: "Botões na tela ou teclas 1 a 6" },
      { label: "Mirar", text: "Arraste o mouse ao redor da zona de strike" },
      { label: "Arremessar", text: "Pare o medidor na área branca com PITCH, Space ou Enter" },
      { label: "Voltar ao título", text: "R" },
    ],
  },
  "osyaberi-oekaki": {
    title: "Desenho com uma IA provocadora",
    catch: "Faça a IA adivinhar seu desenho enquanto ela critica cada traço.",
    genre: "Desenho",
    dialogue: [
      { speaker: "onaga", text: "Eu vou desenhar junto com a IA?" },
      {
        speaker: "akao",
        text: "Você vence quando a IA reconhece seu desenho. O problema é que ela fica provocando o tempo todo.",
      },
      { speaker: "onaga", text: "Essa IA tem uma personalidade horrível." },
      {
        speaker: "akao",
        text: "Pense como um treino mental. Basta desenhar e escolher cores na parte de baixo.",
      },
    ],
    features: [
      "Faça a IA identificar seu desenho",
      "Mantenha o foco apesar das provocações",
    ],
    controls: [
      { label: "Desenhar", text: "Arraste sobre a tela e escolha uma cor na parte inferior" },
    ],
  },
  muon: {
    title: "MUON",
    catch: "Um jogo de ritmo sem música de fundo, apenas efeitos sonoros.",
    genre: "Ritmo",
    dialogue: [
      { speaker: "onaga", text: "Um jogo de ritmo sem música?" },
      {
        speaker: "akao",
        text: "Exatamente. Você só ouve efeitos. Siga o espaço entre as notas e o ritmo visual.",
      },
      { speaker: "onaga", text: "Parece bem diferente. É difícil?" },
      {
        speaker: "akao",
        text: "Há três dificuldades. A pontuação e o maior combo ficam salvos em um ranking local.",
      },
    ],
    features: [
      "Ritmo guiado por efeitos sonoros, sem música",
      "Três níveis de dificuldade",
      "Ranking local de pontos e maior combo",
    ],
  },
  "pittari-hitofudegaki": {
    title: "Desenho perfeito em um traço!",
    catch: "Quão perto do modelo você consegue chegar sem levantar o traço?",
    genre: "Desenho",
    dialogue: [
      { speaker: "onaga", text: "Um jogo de desenho? Eu desenho bem." },
      {
        speaker: "akao",
        text: "Escolha um modelo e trace de uma só vez. Quanto mais perto da estrela ou do peixe, maior a pontuação.",
      },
      { speaker: "onaga", text: "A nota aparece assim que eu termino?" },
      {
        speaker: "akao",
        text: "Sim, no instante em que você solta o dedo ou o mouse. Cada modelo tem seu próprio ranking.",
      },
    ],
    features: [
      "Desafios rápidos de pontuação",
      "Ranking on-line para cada modelo",
    ],
    controls: [
      { label: "Um traço", text: "Arraste com mouse ou toque e solte para receber a nota" },
    ],
  },
  "kenpin-15puzzle": {
    title: "Inspeção! Quebra-cabeça de 15",
    catch: "Não resolva. Decida se ele pode ser resolvido.",
    genre: "Quebra-cabeça",
    dialogue: [
      { speaker: "onaga", text: "Tenho que resolver quebra-cabeças de 15?" },
      {
        speaker: "akao",
        text: "Não precisa. Inspecione cada tabuleiro e decida se ele tem solução nesta corrida contra o tempo.",
      },
      { speaker: "onaga", text: "E se eu não conseguir saber só de olhar?" },
      {
        speaker: "akao",
        text: "Você pode mover as peças para conferir. Acerte dez tabuleiros seguidos para concluir.",
      },
      { speaker: "onaga", text: "Vejo modos EASY e CRAZY..." },
      {
        speaker: "akao",
        text: "EASY fica a poucos movimentos da solução. CRAZY é totalmente aleatório; até eu preciso testar.",
      },
    ],
    features: [
      "Descubra se cada tabuleiro pode ser resolvido",
      "Tabuleiros EASY próximos da solução",
      "Tabuleiros CRAZY totalmente aleatórios",
      "Ranking on-line de tempo",
    ],
    controls: [
      { label: "Selecionar/mover", text: "Mouse ou toque" },
      { label: "Pronto para envio", text: "Se você acha que tem solução" },
      { label: "Defeituoso", text: "Se você acha que é impossível" },
    ],
    notes: ["Acerte dez tabuleiros seguidos. O resultado mostra tempo e erros."],
  },
  "mitomano-1mm": {
    title: "O milímetro de Mitoma",
    catch: "Deslize antes que a bola cruze a linha neste desafio instantâneo.",
    genre: "Esportes",
    dialogue: [
      { speaker: "onaga", text: "Que tipo de jogo é O milímetro de Mitoma?" },
      {
        speaker: "akao",
        text: "Corra atrás do passe e deslize para salvar a bola antes da linha de fundo. Cada tentativa dura poucos segundos.",
      },
      { speaker: "onaga", text: "Quanto mais perto, mais pontos. E se cruzar a linha?" },
      {
        speaker: "akao",
        text: "É OUT, claro. Pare no último instante e recrie aquele milagre famoso.",
      },
    ],
    features: [
      "Revisão de VAR",
      "Ranking on-line pela distância",
      "Quanto menor a distância restante, maior a pontuação",
    ],
    controls: [
      { label: "Correr", text: "Segure Space" },
      { label: "Deslizar", text: "Enter" },
    ],
  },
  "calculate-reversi": {
    title: "Reversi de cálculo",
    catch: "Resolva contas para colocar peças em um Reversi em tempo real.",
    genre: "Tabuleiro",
    dialogue: [
      { speaker: "onaga", text: "O que muda em relação ao Reversi normal?" },
      {
        speaker: "akao",
        text: "Escolha uma casa válida, resolva a conta e coloque a peça. A partida inteira acontece em tempo real.",
      },
      { speaker: "onaga", text: "O oponente espera eu terminar?" },
      {
        speaker: "akao",
        text: "A CPU não espera. Se calcular rápido, você pode colocar várias peças antes da próxima jogada dela.",
      },
      { speaker: "onaga", text: "E se ocuparem a casa enquanto calculo?" },
      {
        speaker: "akao",
        text: "Você pode continuar se ela ainda for válida. Há três níveis de CPU, três de cálculo e modo para dois jogadores no celular.",
      },
    ],
    features: [
      "Reversi em tempo real com uma jogada por resposta correta",
      "Cálculo rápido permite várias jogadas antes da CPU",
      "Três níveis de CPU e de cálculo",
      "Modo para dois jogadores em dispositivos móveis",
    ],
    controls: [
      { label: "Mouse/toque", text: "Escolha a casa, use o teclado numérico e confirme ou apague" },
      { label: "Teclado", text: "Números para responder, Backspace para apagar e Enter para confirmar" },
      { label: "Um jogador", text: "Escolha uma casa e resolva a conta" },
      { label: "Dois jogadores", text: "Cada jogador usa seu tabuleiro e teclado ao mesmo tempo" },
    ],
    notes: ["Vence quem tiver mais peças quando as 64 casas estiverem cheias ou ninguém puder jogar."],
  },
  "nitro-tray-delivery": {
    title: "Entrega de nitro na bandeja",
    catch: "Não balance e não demore. Uma corrida 3D explosiva.",
    genre: "Ação",
    dialogue: [
      { speaker: "onaga", text: "O que exatamente eu estou entregando?" },
      {
        speaker: "akao",
        text: "Leve uma bandeja com nitroglicerina por uma fábrica perigosa e chegue ao final.",
      },
      { speaker: "onaga", text: "Já parece uma má ideia. O que acontece se eu correr?" },
      {
        speaker: "akao",
        text: "Acelerações, colisões, vento e barras giratórias enchem o medidor. No máximo, a garrafa cai e explode.",
      },
      { speaker: "onaga", text: "Tenho que ser rápido sem balançar. Como?" },
      {
        speaker: "akao",
        text: "Ande com cuidado, calcule os obstáculos e escolha sua rota. Portões verdes reduzem cinco segundos.",
      },
    ],
    features: [
      "Corrida 3D carregando nitroglicerina",
      "Andar com cuidado reduz velocidade e balanço",
      "Ventiladores, barras, carrinhos, pisos escorregadios e mais",
      "Portões de cinco segundos e ranking on-line",
    ],
    controls: [
      { label: "Mover", text: "WASD ou setas" },
      { label: "Andar com cuidado", text: "Segure Space ou Shift enquanto se move" },
      { label: "Recomeçar", text: "R" },
      { label: "Voltar ao título", text: "Esc" },
    ],
    notes: ["A garrafa explode se o medidor encher. Cada portão verde reduz cinco segundos uma vez."],
  },
  "pittari-tetromino": {
    title: "Tetraminó perfeito",
    catch: "Monte exatamente a forma-alvo em dez desafios cronometrados.",
    genre: "Quebra-cabeça",
    dialogue: [
      { speaker: "onaga", text: "É um jogo normal de blocos que caem?" },
      {
        speaker: "akao",
        text: "São dez desafios em que você deve montar exatamente a forma mostrada usando tetraminós.",
      },
      { speaker: "onaga", text: "Então não é só apagar linhas. O que acontece depois?" },
      {
        speaker: "akao",
        text: "Nos últimos desafios, você precisa apagar linhas específicas enquanto prepara a forma final. A ordem importa.",
      },
      { speaker: "onaga", text: "Parece difícil. Posso praticar?" },
      {
        speaker: "akao",
        text: "Há modos EASY e HARD. Aperte R para refazer o desafio e registre seu tempo em rankings separados.",
      },
    ],
    features: [
      "Dez desafios para copiar exatamente a forma-alvo",
      "Desafios finais exigem planejar linhas apagadas",
      "Modos EASY e HARD",
      "Ranking de tempo por modo",
    ],
    controls: [
      { label: "Mover", text: "Setas esquerda/direita ou A" },
      { label: "Descida suave", text: "Seta para baixo ou S" },
      { label: "Girar", text: "Z, X ou seta para cima" },
      { label: "Queda rápida", text: "Space" },
      { label: "Reserva", text: "C" },
      { label: "Refazer desafio", text: "R" },
    ],
  },
  doparhythm: {
    title: "DOPARHYTHM!",
    catch: "Acerte notas estimulantes e entre no DOPA TIME durante 120 segundos.",
    genre: "Ritmo",
    dialogue: [
      { speaker: "onaga", text: "Que tipo de jogo de ritmo é DOPARHYTHM?" },
      {
        speaker: "akao",
        text: "Use A, S, D e F para acertar notas coloridas e sobreviva por 120 segundos.",
      },
      { speaker: "onaga", text: "Também há notas pretas com X. Eu aperto?" },
      {
        speaker: "akao",
        text: "Evite no modo normal. No modo DOPA, use J, K, L e ponto e vírgula para rejeitar as notas negativas.",
      },
      { speaker: "onaga", text: "O que acontece no DOPA TIME?" },
      {
        speaker: "akao",
        text: "Encha FEVER para receber notas longas em todas as pistas. Aperte todas as teclas rapidamente. Se DOPA chegar a zero, acabou.",
      },
    ],
    features: [
      "Dispute pontos durante 120 segundos",
      "Quatro teclas no normal e oito no DOPA",
      "Encha FEVER para entrar no DOPA TIME",
      "Rankings EASY e HARD",
    ],
    controls: [
      { label: "Notas coloridas normais", text: "A, S, D, F da esquerda para a direita" },
      { label: "Notas negativas normais", text: "Evite sem apertar" },
      { label: "Notas coloridas DOPA", text: "A, S, D, F da esquerda para a direita" },
      { label: "Notas negativas DOPA", text: "J, K, L, ; da esquerda para a direita" },
    ],
    notes: ["Acertos aumentam combo e FEVER; notas coloridas recuperam DOPA. Erros e teclas incorretas reduzem DOPA."],
  },
  "nazotoki-10s": {
    title: "Quebra-cabeça de 10s",
    catch: "Crie dez números 10 para concluir esta aventura de lógica e cálculo.",
    genre: "Quebra-cabeça",
    dialogue: [
      { speaker: "onaga", text: "O que significa 10s no título?" },
      {
        speaker: "akao",
        text: "Você termina ao criar dez números 10. Combine números limitados com operações básicas.",
      },
      { speaker: "onaga", text: "Parece fácil se é só combinar números..." },
      {
        speaker: "akao",
        text: "Alguns problemas não formam 10 de imediato. Encontre símbolos de operação escondidos na tela.",
      },
      { speaker: "onaga", text: "Existe um tempo-alvo?" },
      {
        speaker: "akao",
        text: "O objetivo é 20 minutos. Você consegue resolver tudo a tempo?",
      },
    ],
    features: [
      "Mistura única de lógica e aritmética",
      "Controles simples por toque",
      "Dicas e explicações completas",
      "Tempo-alvo de 20 minutos",
    ],
  },
  "time-reversi": {
    title: "Time Reversi",
    catch: "Reversi em tempo real com uma jogada a cada três segundos.",
    genre: "Tabuleiro",
    dialogue: [
      { speaker: "onaga", text: "No Reversi, os jogadores se alternam, certo?" },
      {
        speaker: "akao",
        text: "Aqui não há turnos. Quando sua espera de três segundos termina, você pode jogar.",
      },
      { speaker: "onaga", text: "Então devo jogar o mais rápido possível?" },
      {
        speaker: "akao",
        text: "Esse é o dilema. Jogar agora ou esperar o rival: o tempo adiciona uma nova camada ao tabuleiro.",
      },
      { speaker: "onaga", text: "Posso jogar sozinho?" },
      {
        speaker: "akao",
        text: "Treine contra a CPU, jogue com amigos por ID de sala ou enfrente rivais cada vez mais fortes no modo Sobrevivência.",
      },
    ],
    features: [
      "Reversi em tempo real com espera de três segundos",
      "CPU e partidas com amigos por ID de sala",
      "Sobrevivência contra CPU cada vez mais forte",
      "Habilidades como Pedra Livre que ignora a espera",
      "Replays para revisar partidas",
    ],
    notes: ["Uma versão rápida e diferente de Reversi. Download grátis com compras no app e vários idiomas."],
  },
};
