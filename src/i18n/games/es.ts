import type { GameTranslation } from "../game";

export const esGames: Record<string, GameTranslation> = {
  "reverse-typing": {
    title: "REVERSE TYPING",
    catch: "A se convierte en Z y B en Y. Escribe en un alfabeto invertido.",
    genre: "Mecanografía",
    dialogue: [
      { speaker: "onaga", text: "¿Qué cambia respecto a un juego de mecanografía normal?" },
      {
        speaker: "akao",
        text: "Cada tecla se invierte en el alfabeto: A se convierte en Z, B en Y y así sucesivamente.",
      },
      { speaker: "onaga", text: "¿Pulso A y aparece Z? Esto me va a enredar la cabeza." },
      {
        speaker: "akao",
        text: "Ese es el reto. Escribe todas las palabras que puedas antes de que termine el tiempo y sube en la clasificación. Fue el primer título del proyecto de 100 juegos.",
      },
    ],
    features: [
      "Mecanografía de entrenamiento mental con el alfabeto invertido",
      "Clasificación en línea",
    ],
    controls: [
      { label: "Inicio", text: "Introduce un nombre y selecciona START" },
      { label: "Escribir", text: "Usa el teclado para introducir las letras mostradas" },
    ],
    notes: ["Todas las letras se evalúan al revés: A↔Z, B↔Y y así sucesivamente."],
  },
  "giri-strike": {
    title: "Giri Strike",
    catch: "Lanza tan cerca del borde de la zona como te atrevas.",
    genre: "Deportes",
    dialogue: [
      { speaker: "onaga", text: "¡Un juego de béisbol! ¿Cómo se juega?" },
      {
        speaker: "akao",
        text: "Solo tienes que lanzar un strike al límite. Cuanto más cerca quede del borde, más puntos ganas.",
      },
      { speaker: "onaga", text: "Entonces puedo lanzar siempre al mismo sitio, ¿no?" },
      {
        speaker: "akao",
        text: "No exactamente. Repetir la zona o el tipo de lanzamiento facilita el golpeo. Hay que alternar los seis lanzamientos.",
      },
    ],
    features: [
      "Seis tipos de lanzamiento",
      "Repetir zona o lanzamiento aumenta la probabilidad de que el bateador conecte",
      "Selección de estilo de control antes de empezar",
    ],
    controls: [
      { label: "Elegir lanzamiento", text: "Botones en pantalla o teclas 1 a 6" },
      { label: "Apuntar", text: "Arrastra el ratón alrededor de la zona de strike" },
      { label: "Lanzar", text: "Detén el medidor en el área blanca con PITCH, Space o Enter" },
      { label: "Volver al título", text: "R" },
    ],
  },
  "osyaberi-oekaki": {
    title: "Dibujo con una IA burlona",
    catch: "Haz que la IA adivine tu dibujo mientras critica cada trazo.",
    genre: "Dibujo",
    dialogue: [
      { speaker: "onaga", text: "¿Voy a dibujar junto a la IA?" },
      {
        speaker: "akao",
        text: "Superas la partida cuando la IA adivina tu dibujo. El problema es que no deja de burlarse mientras dibujas.",
      },
      { speaker: "onaga", text: "Esa IA tiene muy mal carácter." },
      {
        speaker: "akao",
        text: "Tómatelo como entrenamiento mental. Solo tienes que dibujar y puedes elegir colores abajo.",
      },
    ],
    features: [
      "Consigue que la IA identifique tu dibujo",
      "Mantén la concentración a pesar de sus burlas",
    ],
    controls: [
      { label: "Dibujar", text: "Arrastra sobre el lienzo y elige un color en la parte inferior" },
    ],
  },
  muon: {
    title: "MUON",
    catch: "Un juego de ritmo sin música de fondo, solo con efectos de sonido.",
    genre: "Ritmo",
    dialogue: [
      { speaker: "onaga", text: "¿Un juego de ritmo sin música?" },
      {
        speaker: "akao",
        text: "Exacto. Solo oirás efectos. Sigue la distancia entre las notas y el ritmo visual para acertar el momento.",
      },
      { speaker: "onaga", text: "Suena muy diferente. ¿Es difícil?" },
      {
        speaker: "akao",
        text: "Hay tres dificultades. La puntuación y el mejor combo se guardan en una clasificación local.",
      },
    ],
    features: [
      "Ritmo basado en efectos de sonido sin música de fondo",
      "Tres niveles de dificultad",
      "Clasificación local de puntuación y combo máximo",
    ],
  },
  "pittari-hitofudegaki": {
    title: "¡Dibujo perfecto de un solo trazo!",
    catch: "¿Cuánto puedes acercarte al modelo sin levantar el trazo?",
    genre: "Dibujo",
    dialogue: [
      { speaker: "onaga", text: "¿Un juego de dibujo? Se me da bastante bien." },
      {
        speaker: "akao",
        text: "Elige un modelo y repásalo de un solo trazo. Cuanto más te acerques a figuras como la estrella o el pez, mayor será la puntuación.",
      },
      { speaker: "onaga", text: "¿La puntuación aparece nada más terminar?" },
      {
        speaker: "akao",
        text: "Sí, se calcula al soltar el dedo o el ratón. Cada figura tiene su propia clasificación en línea.",
      },
    ],
    features: [
      "Partidas rápidas de puntuación",
      "Clasificación en línea para cada figura",
    ],
    controls: [
      { label: "Un solo trazo", text: "Arrastra con ratón o pantalla táctil y suelta para puntuar" },
    ],
  },
  "kenpin-15puzzle": {
    title: "¡Inspección! Puzzle de 15",
    catch: "No lo resuelvas. Decide si se puede resolver.",
    genre: "Puzzle",
    dialogue: [
      { speaker: "onaga", text: "¿Tengo que resolver puzzles de 15?" },
      {
        speaker: "akao",
        text: "No hace falta. Inspecciona cada tablero y decide si tiene solución en este contrarreloj.",
      },
      { speaker: "onaga", text: "¿Y si no puedo saberlo con solo mirar?" },
      {
        speaker: "akao",
        text: "Puedes mover las fichas para comprobarlo. Acertar diez tableros seguidos completa la partida.",
      },
      { speaker: "onaga", text: "Veo modos EASY y CRAZY..." },
      {
        speaker: "akao",
        text: "EASY está a pocos movimientos de completarse. CRAZY es totalmente aleatorio; hasta yo tengo que mover fichas para estar seguro.",
      },
    ],
    features: [
      "Decide si cada puzzle puede resolverse",
      "Tableros EASY a pocos movimientos del final",
      "Tableros CRAZY completamente aleatorios",
      "Clasificación contrarreloj en línea",
    ],
    controls: [
      { label: "Seleccionar y mover", text: "Ratón o toque" },
      { label: "Listo para enviar", text: "Elige si crees que tiene solución" },
      { label: "Defectuoso", text: "Elige si crees que es imposible" },
    ],
    notes: ["Acierta diez tableros seguidos. El resultado muestra el tiempo y los errores."],
  },
  "mitomano-1mm": {
    title: "El milímetro de Mitoma",
    catch: "Deslízate antes de que el balón cruce la línea en este reto fugaz.",
    genre: "Deportes",
    dialogue: [
      { speaker: "onaga", text: "¿Qué clase de juego es El milímetro de Mitoma?" },
      {
        speaker: "akao",
        text: "Persigue el pase y deslízate para devolver el balón justo antes de que cruce la línea de gol. Cada intento dura unos segundos.",
      },
      { speaker: "onaga", text: "Cuanto más cerca de la línea, más puntos. ¿Y si la cruza?" },
      {
        speaker: "akao",
        text: "Es OUT, por supuesto. Apura al máximo y recrea aquel famoso milagro.",
      },
    ],
    features: [
      "Revisión VAR incluida",
      "Clasificación en línea según la distancia",
      "Cuanto menor sea la distancia restante, mayor será la puntuación",
    ],
    controls: [
      { label: "Correr", text: "Mantén Space" },
      { label: "Deslizarse", text: "Enter" },
    ],
  },
  "calculate-reversi": {
    title: "Reversi de cálculo",
    catch: "Resuelve operaciones para colocar fichas en un Reversi en tiempo real.",
    genre: "Tablero",
    dialogue: [
      { speaker: "onaga", text: "¿En qué se diferencia del Reversi normal?" },
      {
        speaker: "akao",
        text: "Elige una casilla válida, resuelve la operación y coloca la ficha. Toda la partida ocurre en tiempo real.",
      },
      { speaker: "onaga", text: "¿El rival espera a que termine de pensar?" },
      {
        speaker: "akao",
        text: "La CPU no espera. Si calculas rápido, puedes colocar varias fichas antes de su siguiente movimiento.",
      },
      { speaker: "onaga", text: "¿Y si ocupan la casilla mientras calculo?" },
      {
        speaker: "akao",
        text: "Puedes continuar si sigue siendo válida tras la jugada rival. Hay tres niveles de CPU, tres de cálculo y modo para dos jugadores en móvil.",
      },
    ],
    features: [
      "Reversi en tiempo real: cada respuesta correcta permite colocar una ficha",
      "El cálculo rápido permite varias jugadas antes de la CPU",
      "Tres niveles de CPU y tres de cálculo",
      "Modo de dos jugadores adaptado a móviles",
    ],
    controls: [
      { label: "Ratón/toque", text: "Elige casilla, usa el teclado numérico y confirma o borra" },
      { label: "Teclado", text: "Números para responder, Backspace para borrar y Enter para confirmar" },
      { label: "Un jugador", text: "Elige una casilla y resuelve la operación" },
      { label: "Dos jugadores", text: "Cada jugador usa su tablero y teclado numérico al mismo tiempo" },
    ],
    notes: ["Gana quien tenga más fichas cuando se llenan las 64 casillas o nadie puede mover."],
  },
  "nitro-tray-delivery": {
    title: "Entrega de nitro en bandeja",
    catch: "No la sacudas y no te retrases. Un contrarreloj 3D explosivo.",
    genre: "Acción",
    dialogue: [
      { speaker: "onaga", text: "¿Qué estoy entregando exactamente?" },
      {
        speaker: "akao",
        text: "Lleva una bandeja con nitroglicerina por una fábrica peligrosa y llega a la meta.",
      },
      { speaker: "onaga", text: "Ya suena mal. ¿Qué pasa si corro?" },
      {
        speaker: "akao",
        text: "Las aceleraciones, choques, viento y barras giratorias llenan el medidor. Si llega al máximo, la botella cae y explota.",
      },
      { speaker: "onaga", text: "Tengo que ir rápido sin moverla. ¿Cómo?" },
      {
        speaker: "akao",
        text: "Camina con cuidado para estabilizarla, calcula los obstáculos y elige ruta. Las puertas verdes restan cinco segundos.",
      },
    ],
    features: [
      "Contrarreloj 3D transportando nitroglicerina",
      "Caminar con cuidado reduce velocidad y balanceo",
      "Ventiladores, barras, carros, suelos resbaladizos y más",
      "Puertas de cinco segundos y clasificación en línea",
    ],
    controls: [
      { label: "Moverse", text: "WASD o flechas" },
      { label: "Caminar con cuidado", text: "Mantén Space o Shift al moverte" },
      { label: "Reiniciar", text: "R" },
      { label: "Volver al título", text: "Esc" },
    ],
    notes: ["La botella explota si el medidor se llena. Cada puerta verde resta cinco segundos una vez."],
  },
  "pittari-tetromino": {
    title: "Tetrominó perfecto",
    catch: "Construye exactamente la figura objetivo en diez pruebas contrarreloj.",
    genre: "Puzzle",
    dialogue: [
      { speaker: "onaga", text: "¿Es un puzzle normal de bloques que caen?" },
      {
        speaker: "akao",
        text: "Es un contrarreloj de diez pruebas donde debes construir exactamente la figura indicada con tetrominós.",
      },
      { speaker: "onaga", text: "No se trata solo de borrar líneas. ¿Qué pasa al final?" },
      {
        speaker: "akao",
        text: "En las últimas pruebas debes borrar líneas concretas mientras preparas la figura final. El orden importa.",
      },
      { speaker: "onaga", text: "Parece difícil. ¿Puedo practicar?" },
      {
        speaker: "akao",
        text: "Hay modos EASY y HARD. Pulsa R para repetir la prueba y registra tu tiempo en clasificaciones separadas.",
      },
    ],
    features: [
      "Diez pruebas para copiar exactamente la figura objetivo",
      "Las pruebas finales exigen planificar borrados de línea",
      "Modos EASY y HARD",
      "Clasificación de tiempo para cada modo",
    ],
    controls: [
      { label: "Mover", text: "Flechas izquierda/derecha o A" },
      { label: "Caída suave", text: "Flecha abajo o S" },
      { label: "Girar", text: "Z, X o flecha arriba" },
      { label: "Caída rápida", text: "Space" },
      { label: "Reserva", text: "C" },
      { label: "Repetir prueba", text: "R" },
    ],
  },
  doparhythm: {
    title: "DOPARHYTHM!",
    catch: "Golpea notas estimulantes y entra en DOPA TIME durante 120 segundos.",
    genre: "Ritmo",
    dialogue: [
      { speaker: "onaga", text: "¿Qué clase de juego de ritmo es DOPARHYTHM?" },
      {
        speaker: "akao",
        text: "Usa A, S, D y F para golpear notas de colores y aguanta 120 segundos.",
      },
      { speaker: "onaga", text: "También veo notas negras con una X. ¿Las golpeo?" },
      {
        speaker: "akao",
        text: "Evítalas en el modo normal. En DOPA usa J, K, L y punto y coma para rechazar las notas negativas.",
      },
      { speaker: "onaga", text: "¿Qué ocurre en DOPA TIME?" },
      {
        speaker: "akao",
        text: "Llena FEVER y aparecerán notas largas en todos los carriles. Pulsa todas las teclas rápidamente. Si DOPA llega a cero, pierdes.",
      },
    ],
    features: [
      "Compite por puntos durante 120 segundos",
      "Cuatro teclas en modo normal y ocho en DOPA",
      "Llena FEVER para entrar en DOPA TIME",
      "Clasificaciones EASY y HARD",
    ],
    controls: [
      { label: "Notas de color normales", text: "A, S, D, F de izquierda a derecha" },
      { label: "Notas negativas normales", text: "Evítalas sin pulsar" },
      { label: "Notas de color DOPA", text: "A, S, D, F de izquierda a derecha" },
      { label: "Notas negativas DOPA", text: "J, K, L, ; de izquierda a derecha" },
    ],
    notes: ["Los aciertos aumentan combo y FEVER; las notas de color recuperan DOPA. Los fallos y teclas incorrectas reducen DOPA."],
  },
  "nazotoki-10s": {
    title: "Puzzle de 10s",
    catch: "Crea diez dieces para completar esta aventura de lógica y cálculo.",
    genre: "Puzzle",
    dialogue: [
      { speaker: "onaga", text: "¿Qué significa 10s en el título?" },
      {
        speaker: "akao",
        text: "Completa el juego creando diez dieces. Combina números limitados con operaciones básicas.",
      },
      { speaker: "onaga", text: "Parece fácil si solo hay que combinar números..." },
      {
        speaker: "akao",
        text: "Algunos problemas no permiten crear 10 a primera vista. Debes encontrar símbolos de operación ocultos en la pantalla.",
      },
      { speaker: "onaga", text: "¿Hay un tiempo objetivo?" },
      {
        speaker: "akao",
        text: "El objetivo son 20 minutos. ¿Podrás resolverlos todos a tiempo?",
      },
    ],
    features: [
      "Mezcla única de lógica y aritmética",
      "Controles táctiles sencillos",
      "Pistas y explicaciones completas",
      "Tiempo objetivo de 20 minutos",
    ],
  },
  "time-reversi": {
    title: "Time Reversi",
    catch: "Reversi en tiempo real con una jugada cada tres segundos.",
    genre: "Tablero",
    dialogue: [
      { speaker: "onaga", text: "En Reversi los jugadores se turnan, ¿verdad?" },
      {
        speaker: "akao",
        text: "Aquí no hay turnos. Cuando termina tu recarga de tres segundos, puedes colocar una ficha.",
      },
      { speaker: "onaga", text: "Entonces, ¿siempre conviene jugar rápido?" },
      {
        speaker: "akao",
        text: "Ese es el dilema. Mover ya o esperar al rival. El tiempo añade otra capa a la lectura del tablero.",
      },
      { speaker: "onaga", text: "¿Puedo jugar en solitario?" },
      {
        speaker: "akao",
        text: "Practica contra la CPU, reta a un amigo con una sala o encadena victorias contra rivales cada vez más fuertes en Supervivencia.",
      },
    ],
    features: [
      "Reversi en tiempo real con recarga de tres segundos",
      "CPU y partidas con amigos mediante ID de sala",
      "Supervivencia contra CPU cada vez más fuerte",
      "Habilidades como Piedra Libre que ignoran la recarga",
      "Repeticiones para revisar las partidas",
    ],
    notes: ["Una versión rápida y diferente de Reversi. Descarga gratuita con compras integradas y varios idiomas."],
  },
};
