import type { GameTranslation } from "../game";

export const frGames: Record<string, GameTranslation> = {
  "reverse-typing": {
    title: "REVERSE TYPING",
    catch: "A devient Z, B devient Y. Tapez dans un alphabet inversé.",
    genre: "Dactylographie",
    dialogue: [
      { speaker: "onaga", text: "Quelle différence avec un jeu de frappe normal ?" },
      {
        speaker: "akao",
        text: "Chaque touche est inversée dans l'alphabet : A devient Z, B devient Y, et ainsi de suite.",
      },
      { speaker: "onaga", text: "J'appuie sur A et j'obtiens Z ? Mon cerveau va se nouer." },
      {
        speaker: "akao",
        text: "C'est tout le défi. Tape autant de mots que possible avant la fin et vise le classement. C'était le premier jeu du projet des 100 jeux.",
      },
    ],
    features: [
      "Dactylographie cérébrale avec alphabet inversé",
      "Classement en ligne",
    ],
    controls: [
      { label: "Démarrer", text: "Saisissez un nom puis choisissez START" },
      { label: "Taper", text: "Utilisez le clavier pour saisir les lettres affichées" },
    ],
    notes: ["Toutes les lettres sont évaluées à l'envers : A↔Z, B↔Y, etc."],
  },
  "giri-strike": {
    title: "Giri Strike",
    catch: "Lancez au plus près du bord de la zone de strike.",
    genre: "Sport",
    dialogue: [
      { speaker: "onaga", text: "Un jeu de baseball ! Comment on joue ?" },
      {
        speaker: "akao",
        text: "Il faut lancer un strike juste sur le bord. Plus la balle est proche de la limite, plus tu marques.",
      },
      { speaker: "onaga", text: "Je peux donc viser toujours le même endroit ?" },
      {
        speaker: "akao",
        text: "Pas vraiment. Répéter la zone ou le type de lancer facilite la frappe. Il faut varier les six lancers.",
      },
    ],
    features: [
      "Six types de lancers",
      "Répéter une zone ou un lancer aide le batteur",
      "Choix du style de contrôle avant la partie",
    ],
    controls: [
      { label: "Choisir le lancer", text: "Boutons ou touches 1 à 6" },
      { label: "Viser", text: "Faites glisser la souris autour de la zone" },
      { label: "Lancer", text: "Arrêtez la jauge dans le blanc avec PITCH, Space ou Enter" },
      { label: "Retour au titre", text: "R" },
    ],
  },
  "osyaberi-oekaki": {
    title: "Dessin avec une IA moqueuse",
    catch: "Faites deviner votre dessin à l'IA pendant qu'elle critique chaque trait.",
    genre: "Dessin",
    dialogue: [
      { speaker: "onaga", text: "Je dessine avec l'IA ?" },
      {
        speaker: "akao",
        text: "Tu réussis quand l'IA reconnaît ton dessin. Mais elle n'arrête pas de se moquer pendant que tu dessines.",
      },
      { speaker: "onaga", text: "Cette IA a vraiment mauvais caractère." },
      {
        speaker: "akao",
        text: "Vois ça comme un entraînement mental. Il suffit de dessiner, avec un choix de couleurs en bas.",
      },
    ],
    features: [
      "Faites reconnaître votre dessin par l'IA",
      "Restez concentré malgré ses moqueries",
    ],
    controls: [
      { label: "Dessiner", text: "Faites glisser sur la toile et choisissez une couleur en bas" },
    ],
  },
  muon: {
    title: "MUON",
    catch: "Un jeu de rythme sans musique de fond, uniquement avec des effets sonores.",
    genre: "Rythme",
    dialogue: [
      { speaker: "onaga", text: "Un jeu de rythme sans musique ?" },
      {
        speaker: "akao",
        text: "Exactement. Tu n'entends que des effets. Suis l'espacement des notes et le rythme visuel.",
      },
      { speaker: "onaga", text: "C'est très différent. C'est difficile ?" },
      {
        speaker: "akao",
        text: "Il y a trois difficultés. Le score et le meilleur combo sont enregistrés localement.",
      },
    ],
    features: [
      "Rythme guidé par les effets sonores, sans musique",
      "Trois niveaux de difficulté",
      "Classement local du score et du meilleur combo",
    ],
  },
  "pittari-hitofudegaki": {
    title: "Dessin parfait en un trait !",
    catch: "À quel point pouvez-vous reproduire le modèle sans lever le trait ?",
    genre: "Dessin",
    dialogue: [
      { speaker: "onaga", text: "Un jeu de dessin ? Je suis plutôt doué." },
      {
        speaker: "akao",
        text: "Choisis un modèle et suis-le en un seul trait. Plus tu te rapproches de l'étoile ou du poisson, plus ton score monte.",
      },
      { speaker: "onaga", text: "Le score arrive dès que j'ai terminé ?" },
      {
        speaker: "akao",
        text: "Oui, dès que tu relâches le doigt ou la souris. Chaque modèle possède son propre classement.",
      },
    ],
    features: [
      "Défis de score très courts",
      "Classement en ligne pour chaque modèle",
    ],
    controls: [
      { label: "Un trait", text: "Faites glisser la souris ou le doigt puis relâchez pour être noté" },
    ],
  },
  "kenpin-15puzzle": {
    title: "Inspection ! Taquin",
    catch: "Ne le résolvez pas. Décidez s'il peut être résolu.",
    genre: "Puzzle",
    dialogue: [
      { speaker: "onaga", text: "Je dois résoudre des taquins ?" },
      {
        speaker: "akao",
        text: "Pas besoin. Inspecte chaque plateau et décide s'il est soluble dans ce contre-la-montre.",
      },
      { speaker: "onaga", text: "Et si je ne peux pas le savoir d'un coup d'œil ?" },
      {
        speaker: "akao",
        text: "Tu peux déplacer les tuiles pour vérifier. Dix bonnes inspections de suite terminent la partie.",
      },
      { speaker: "onaga", text: "Il y a EASY et CRAZY..." },
      {
        speaker: "akao",
        text: "EASY n'est qu'à quelques coups de la fin. CRAZY est totalement aléatoire ; même moi, je dois essayer.",
      },
    ],
    features: [
      "Déterminez si chaque taquin est soluble",
      "Plateaux EASY proches de la fin",
      "Plateaux CRAZY totalement aléatoires",
      "Classement chronométré en ligne",
    ],
    controls: [
      { label: "Choisir/déplacer", text: "Souris ou toucher" },
      { label: "Bon à expédier", text: "Si vous pensez que le plateau est soluble" },
      { label: "Défectueux", text: "Si vous pensez qu'il est impossible" },
    ],
    notes: ["Réussissez dix inspections de suite. Le résultat indique le temps et les erreurs."],
  },
  "mitomano-1mm": {
    title: "Le millimètre de Mitoma",
    catch: "Glissez avant que le ballon franchisse la ligne dans ce défi éclair.",
    genre: "Sport",
    dialogue: [
      { speaker: "onaga", text: "Quel genre de jeu est Le millimètre de Mitoma ?" },
      {
        speaker: "akao",
        text: "Poursuis la passe et glisse pour renvoyer le ballon juste avant la ligne de but. Un essai dure quelques secondes.",
      },
      { speaker: "onaga", text: "Plus je suis proche, plus je marque. Et s'il franchit la ligne ?" },
      {
        speaker: "akao",
        text: "C'est OUT, bien sûr. Arrête-le au dernier instant et recrée ce célèbre miracle.",
      },
    ],
    features: [
      "Vérification VAR incluse",
      "Classement en ligne selon la distance",
      "Moins il reste de distance, plus le score est élevé",
    ],
    controls: [
      { label: "Courir", text: "Maintenez Space" },
      { label: "Glisser", text: "Enter" },
    ],
  },
  "calculate-reversi": {
    title: "Reversi calcul",
    catch: "Résolvez des opérations pour poser vos pions dans un Reversi en temps réel.",
    genre: "Plateau",
    dialogue: [
      { speaker: "onaga", text: "Quelle différence avec le Reversi normal ?" },
      {
        speaker: "akao",
        text: "Choisis une case légale, résous le calcul et pose ton pion. Toute la partie se déroule en temps réel.",
      },
      { speaker: "onaga", text: "L'adversaire attend que je finisse ?" },
      {
        speaker: "akao",
        text: "Le CPU n'attend pas. Si tu calcules vite, tu peux poser plusieurs pions avant son prochain coup.",
      },
      { speaker: "onaga", text: "Et si la case est prise pendant mon calcul ?" },
      {
        speaker: "akao",
        text: "Tu peux continuer si elle reste légale après le coup adverse. Trois niveaux de CPU, trois de calcul et un mode deux joueurs sur mobile sont disponibles.",
      },
    ],
    features: [
      "Reversi en temps réel où chaque bonne réponse permet de jouer",
      "Le calcul rapide offre plusieurs coups avant le CPU",
      "Trois niveaux de CPU et de calcul",
      "Mode deux joueurs adapté au mobile",
    ],
    controls: [
      { label: "Souris/toucher", text: "Choisissez une case, utilisez le pavé puis validez ou effacez" },
      { label: "Clavier", text: "Chiffres pour répondre, Backspace pour effacer, Enter pour valider" },
      { label: "Solo", text: "Choisissez une case et résolvez le calcul" },
      { label: "Deux joueurs", text: "Chaque joueur utilise son plateau et son pavé simultanément" },
    ],
    notes: ["Le joueur avec le plus de pions gagne lorsque les 64 cases sont pleines ou qu'aucun coup n'est possible."],
  },
  "nitro-tray-delivery": {
    title: "Livraison de nitro sur plateau",
    catch: "Ne la secouez pas et ne ralentissez pas. Un contre-la-montre 3D explosif.",
    genre: "Action",
    dialogue: [
      { speaker: "onaga", text: "Qu'est-ce que je livre exactement ?" },
      {
        speaker: "akao",
        text: "Traverse une usine dangereuse avec un plateau de nitroglycérine et atteins l'arrivée.",
      },
      { speaker: "onaga", text: "Ça semble déjà risqué. Que se passe-t-il si je cours ?" },
      {
        speaker: "akao",
        text: "Accélérations, chocs, vent et barres rotatives remplissent la jauge. Au maximum, la bouteille tombe et explose.",
      },
      { speaker: "onaga", text: "Je dois aller vite sans la secouer. Comment faire ?" },
      {
        speaker: "akao",
        text: "Marche prudemment, anticipe les obstacles et choisis ta route. Les portes vertes retirent cinq secondes.",
      },
    ],
    features: [
      "Contre-la-montre 3D avec un plateau de nitroglycérine",
      "La marche prudente réduit vitesse et secousses",
      "Ventilateurs, barres, chariots, sols glissants et plus",
      "Portes de cinq secondes et classement en ligne",
    ],
    controls: [
      { label: "Déplacement", text: "WASD ou flèches" },
      { label: "Marche prudente", text: "Maintenez Space ou Shift en avançant" },
      { label: "Recommencer", text: "R" },
      { label: "Retour au titre", text: "Esc" },
    ],
    notes: ["La bouteille explose si la jauge est pleine. Chaque porte verte retire cinq secondes une fois."],
  },
  "pittari-tetromino": {
    title: "Tétromino parfait",
    catch: "Construisez exactement la forme cible dans dix épreuves chronométrées.",
    genre: "Puzzle",
    dialogue: [
      { speaker: "onaga", text: "C'est un jeu classique de blocs qui tombent ?" },
      {
        speaker: "akao",
        text: "C'est un contre-la-montre de dix épreuves où tu dois reproduire exactement la forme avec des tétrominos.",
      },
      { speaker: "onaga", text: "Il ne suffit pas d'effacer des lignes. Et à la fin ?" },
      {
        speaker: "akao",
        text: "Les dernières épreuves demandent d'effacer certaines lignes tout en préparant la forme finale. L'ordre est crucial.",
      },
      { speaker: "onaga", text: "Ça a l'air difficile. Je peux m'entraîner ?" },
      {
        speaker: "akao",
        text: "Il y a EASY et HARD. Appuie sur R pour reprendre l'épreuve et classe ton temps séparément.",
      },
    ],
    features: [
      "Dix épreuves pour copier exactement la cible",
      "Les dernières demandent de planifier les lignes effacées",
      "Modes EASY et HARD",
      "Classement chronométré pour chaque mode",
    ],
    controls: [
      { label: "Déplacer", text: "Flèches gauche/droite ou A" },
      { label: "Descente douce", text: "Flèche bas ou S" },
      { label: "Tourner", text: "Z, X ou flèche haut" },
      { label: "Chute rapide", text: "Space" },
      { label: "Réserve", text: "C" },
      { label: "Reprendre l'épreuve", text: "R" },
    ],
  },
  doparhythm: {
    title: "DOPARHYTHM!",
    catch: "Frappez les notes stimulantes et entrez en DOPA TIME pendant 120 secondes.",
    genre: "Rythme",
    dialogue: [
      { speaker: "onaga", text: "Quel type de jeu de rythme est DOPARHYTHM ?" },
      {
        speaker: "akao",
        text: "Utilise A, S, D et F pour frapper les notes colorées et tiens 120 secondes.",
      },
      { speaker: "onaga", text: "Je vois aussi des notes noires avec une croix. Je les frappe ?" },
      {
        speaker: "akao",
        text: "Évite-les en mode normal. En mode DOPA, utilise J, K, L et point-virgule pour les repousser.",
      },
      { speaker: "onaga", text: "Que se passe-t-il pendant DOPA TIME ?" },
      {
        speaker: "akao",
        text: "Remplis FEVER pour faire apparaître de longues notes partout. Martèle toutes les touches. Si DOPA tombe à zéro, la partie est finie.",
      },
    ],
    features: [
      "Marquez un maximum en 120 secondes",
      "Quatre touches en normal, huit en DOPA",
      "Remplissez FEVER pour entrer en DOPA TIME",
      "Classements EASY et HARD",
    ],
    controls: [
      { label: "Notes colorées normales", text: "A, S, D, F de gauche à droite" },
      { label: "Notes négatives normales", text: "Évitez-les sans appuyer" },
      { label: "Notes colorées DOPA", text: "A, S, D, F de gauche à droite" },
      { label: "Notes négatives DOPA", text: "J, K, L, ; de gauche à droite" },
    ],
    notes: ["Les réussites augmentent combo et FEVER ; les notes colorées restaurent DOPA. Les erreurs et mauvaises touches le réduisent."],
  },
  "nazotoki-10s": {
    title: "Puzzle des 10",
    catch: "Créez dix fois 10 pour terminer cette aventure de calcul et d'énigmes.",
    genre: "Puzzle",
    dialogue: [
      { speaker: "onaga", text: "Que signifie 10s dans le titre ?" },
      {
        speaker: "akao",
        text: "Il faut créer dix fois le nombre 10. Combine des nombres limités avec les opérations de base.",
      },
      { speaker: "onaga", text: "Ça semble facile s'il suffit de combiner les nombres..." },
      {
        speaker: "akao",
        text: "Certains écrans ne permettent pas d'obtenir 10 immédiatement. Trouve les symboles d'opération cachés.",
      },
      { speaker: "onaga", text: "Il y a un temps cible ?" },
      {
        speaker: "akao",
        text: "L'objectif est de 20 minutes. Peux-tu résoudre toutes les énigmes à temps ?",
      },
    ],
    features: [
      "Mélange original d'énigmes et d'arithmétique",
      "Commandes tactiles simples",
      "Indices et solutions détaillées",
      "Temps cible de 20 minutes",
    ],
  },
  "time-reversi": {
    title: "Time Reversi",
    catch: "Un Reversi en temps réel avec un coup toutes les trois secondes.",
    genre: "Plateau",
    dialogue: [
      { speaker: "onaga", text: "Au Reversi, les joueurs jouent chacun leur tour, non ?" },
      {
        speaker: "akao",
        text: "Ici, il n'y a pas de tours. Dès que ton délai de trois secondes est terminé, tu peux jouer.",
      },
      { speaker: "onaga", text: "Il faut donc toujours jouer le plus vite possible ?" },
      {
        speaker: "akao",
        text: "C'est le dilemme. Jouer tout de suite ou attendre l'adversaire : le timing ajoute une nouvelle lecture du plateau.",
      },
      { speaker: "onaga", text: "Je peux jouer seul ?" },
      {
        speaker: "akao",
        text: "Entraîne-toi contre le CPU, invite un ami avec un identifiant de salle ou enchaîne les victoires contre des adversaires de plus en plus forts.",
      },
    ],
    features: [
      "Reversi en temps réel avec délai de trois secondes",
      "CPU et parties entre amis par identifiant de salle",
      "Survie contre un CPU de plus en plus fort",
      "Compétences comme Pierre libre qui ignore le délai",
      "Replays pour revoir les parties",
    ],
    notes: ["Une version rapide et originale du Reversi. Téléchargement gratuit avec achats intégrés et plusieurs langues."],
  },
};
