import type { GameTranslation } from "../game";

export const deGames: Record<string, GameTranslation> = {
  "reverse-typing": {
    title: "REVERSE TYPING",
    catch: "A wird zu Z, B zu Y. Tippe in einer umgekehrten Buchstabenwelt.",
    genre: "Tippen",
    dialogue: [
      { speaker: "onaga", text: "Was ist anders als bei einem normalen Tippspiel?" },
      {
        speaker: "akao",
        text: "Jede Taste wird im Alphabet gespiegelt: A wird zu Z, B zu Y und so weiter.",
      },
      { speaker: "onaga", text: "Ich drücke A und bekomme Z? Das verdreht mir den Kopf." },
      {
        speaker: "akao",
        text: "Genau das ist die Herausforderung. Tippe vor Ablauf der Zeit möglichst viele Wörter und steige im Ranking auf. Es war das erste Spiel des 100-Spiele-Projekts.",
      },
    ],
    features: [
      "Gehirntraining mit umgekehrtem Alphabet",
      "Online-Rangliste",
    ],
    controls: [
      { label: "Start", text: "Namen eingeben und START auswählen" },
      { label: "Tippen", text: "Die angezeigten Buchstaben mit der Tastatur eingeben" },
    ],
    notes: ["Alle Buchstaben werden umgekehrt gewertet: A↔Z, B↔Y und so weiter."],
  },
  "giri-strike": {
    title: "Giri Strike",
    catch: "Wirf so knapp an den Rand der Strike-Zone wie möglich.",
    genre: "Sport",
    dialogue: [
      { speaker: "onaga", text: "Ein Baseballspiel! Wie funktioniert es?" },
      {
        speaker: "akao",
        text: "Wirf einen Strike direkt an den Rand. Je näher der Ball an der Grenze liegt, desto mehr Punkte gibt es.",
      },
      { speaker: "onaga", text: "Dann werfe ich einfach immer an dieselbe Stelle, oder?" },
      {
        speaker: "akao",
        text: "Nicht ganz. Wiederholst du Position oder Wurfart, trifft der Batter leichter. Du musst alle sechs Würfe mischen.",
      },
    ],
    features: [
      "Sechs Wurfarten",
      "Wiederholte Positionen und Würfe werden leichter getroffen",
      "Wahl eines Kontrolltyps vor dem Start",
    ],
    controls: [
      { label: "Wurf wählen", text: "Bildschirmtasten oder Ziffern 1 bis 6" },
      { label: "Zielen", text: "Mit der Maus um die Strike-Zone ziehen" },
      { label: "Werfen", text: "Anzeige im weißen Bereich mit PITCH, Space oder Enter stoppen" },
      { label: "Zum Titel", text: "R" },
    ],
  },
  "osyaberi-oekaki": {
    title: "Zeichnen mit einer spöttischen KI",
    catch: "Lass die KI dein Bild erraten, während sie jeden Strich kommentiert.",
    genre: "Zeichnen",
    dialogue: [
      { speaker: "onaga", text: "Zeichne ich zusammen mit der KI?" },
      {
        speaker: "akao",
        text: "Du gewinnst, wenn die KI dein Bild erkennt. Allerdings macht sie sich während des Zeichnens ständig darüber lustig.",
      },
      { speaker: "onaga", text: "Diese KI hat wirklich schlechte Manieren." },
      {
        speaker: "akao",
        text: "Sieh es als mentales Training. Du musst nur zeichnen und kannst unten Farben auswählen.",
      },
    ],
    features: [
      "Die KI muss deine Zeichnung erkennen",
      "Konzentriere dich trotz ihrer Kommentare",
    ],
    controls: [
      { label: "Zeichnen", text: "Auf der Fläche ziehen und unten eine Farbe wählen" },
    ],
  },
  muon: {
    title: "MUON",
    catch: "Ein Rhythmusspiel ohne Hintergrundmusik, nur mit Soundeffekten.",
    genre: "Rhythmus",
    dialogue: [
      { speaker: "onaga", text: "Ein Rhythmusspiel ohne Musik?" },
      {
        speaker: "akao",
        text: "Genau. Du hörst nur Effekte. Orientiere dich an den Abständen der Noten und am visuellen Rhythmus.",
      },
      { speaker: "onaga", text: "Das klingt ganz anders. Ist es schwierig?" },
      {
        speaker: "akao",
        text: "Es gibt drei Schwierigkeitsgrade. Punktzahl und höchste Kombo werden lokal gespeichert.",
      },
    ],
    features: [
      "Rhythmus nur durch Soundeffekte und Bilder",
      "Drei Schwierigkeitsgrade",
      "Lokale Rangliste für Punkte und höchste Kombo",
    ],
  },
  "pittari-hitofudegaki": {
    title: "Perfekte Ein-Strich-Zeichnung!",
    catch: "Wie genau kannst du die Vorlage in einem Zug nachzeichnen?",
    genre: "Zeichnen",
    dialogue: [
      { speaker: "onaga", text: "Ein Zeichenspiel? Darin bin ich ziemlich gut." },
      {
        speaker: "akao",
        text: "Wähle eine Vorlage und zeichne sie in einem Zug nach. Je näher du Stern oder Fisch kommst, desto höher die Punktzahl.",
      },
      { speaker: "onaga", text: "Bekomme ich die Punkte sofort?" },
      {
        speaker: "akao",
        text: "Ja, sobald du Finger oder Maus loslässt. Jede Vorlage hat eine eigene Online-Rangliste.",
      },
    ],
    features: [
      "Kurze Punktejagden in wenigen Sekunden",
      "Eigene Rangliste für jede Vorlage",
    ],
    controls: [
      { label: "Ein Strich", text: "Mit Maus oder Finger ziehen und zum Werten loslassen" },
    ],
  },
  "kenpin-15puzzle": {
    title: "Prüfung! 15-Puzzle",
    catch: "Löse es nicht. Entscheide, ob es lösbar ist.",
    genre: "Puzzle",
    dialogue: [
      { speaker: "onaga", text: "Muss ich 15-Puzzles lösen?" },
      {
        speaker: "akao",
        text: "Nein. Prüfe jedes Feld und entscheide im Zeitlauf, ob es überhaupt lösbar ist.",
      },
      { speaker: "onaga", text: "Und wenn ich es nicht sofort sehe?" },
      {
        speaker: "akao",
        text: "Du darfst die Steine bewegen. Zehn richtige Prüfungen hintereinander beenden das Spiel.",
      },
      { speaker: "onaga", text: "Es gibt EASY und CRAZY..." },
      {
        speaker: "akao",
        text: "EASY ist nur wenige Züge vom Ziel entfernt. CRAZY ist völlig zufällig; selbst ich muss es ausprobieren.",
      },
    ],
    features: [
      "Erkenne, ob ein 15-Puzzle lösbar ist",
      "EASY-Felder kurz vor der Lösung",
      "Völlig zufällige CRAZY-Felder",
      "Online-Zeitrangliste",
    ],
    controls: [
      { label: "Wählen/bewegen", text: "Maus oder Touch" },
      { label: "Versandbereit", text: "Wenn du das Feld für lösbar hältst" },
      { label: "Defekt", text: "Wenn du es für unlösbar hältst" },
    ],
    notes: ["Prüfe zehn Felder in Folge richtig. Das Ergebnis zeigt Zeit und Fehler."],
  },
  "mitomano-1mm": {
    title: "Mitomas 1 Millimeter",
    catch: "Rutsche zum Ball, bevor er die Linie überquert.",
    genre: "Sport",
    dialogue: [
      { speaker: "onaga", text: "Was für ein Spiel ist Mitomas 1 Millimeter?" },
      {
        speaker: "akao",
        text: "Jage dem Pass nach und rette den Ball mit einer Grätsche kurz vor der Torlinie. Jeder Versuch dauert nur Sekunden.",
      },
      { speaker: "onaga", text: "Je näher an der Linie, desto mehr Punkte. Was passiert dahinter?" },
      {
        speaker: "akao",
        text: "Dann ist er OUT. Halte ihn so knapp wie möglich auf und stelle das berühmte Wunder nach.",
      },
    ],
    features: [
      "VAR-Überprüfung",
      "Online-Rangliste nach Abstand",
      "Je kleiner der Restabstand, desto höher die Punktzahl",
    ],
    controls: [
      { label: "Sprint", text: "Space halten" },
      { label: "Grätsche", text: "Enter" },
    ],
  },
  "calculate-reversi": {
    title: "Rechen-Reversi",
    catch: "Löse Aufgaben, um in Echtzeit Reversi-Steine zu setzen.",
    genre: "Brettspiel",
    dialogue: [
      { speaker: "onaga", text: "Was ist anders als bei normalem Reversi?" },
      {
        speaker: "akao",
        text: "Wähle ein gültiges Feld, löse die Rechnung und setze deinen Stein. Das ganze Match läuft in Echtzeit.",
      },
      { speaker: "onaga", text: "Wartet der Gegner, bis ich fertig bin?" },
      {
        speaker: "akao",
        text: "Der CPU wartet nicht. Rechnest du schnell, kannst du vor seinem nächsten Zug mehrere Steine setzen.",
      },
      { speaker: "onaga", text: "Was, wenn mein Feld beim Rechnen besetzt wird?" },
      {
        speaker: "akao",
        text: "Du kannst weitermachen, solange es danach noch gültig ist. Es gibt je drei CPU- und Rechenstufen sowie einen mobilen Zweispielermodus.",
      },
    ],
    features: [
      "Echtzeit-Reversi mit einem Zug pro richtiger Antwort",
      "Schnelles Rechnen ermöglicht mehrere Züge vor dem CPU",
      "Je drei CPU- und Rechenstufen",
      "Zweispielermodus für Mobilgeräte",
    ],
    controls: [
      { label: "Maus/Touch", text: "Feld wählen, Zahlenfeld nutzen, bestätigen oder löschen" },
      { label: "Tastatur", text: "Ziffern eingeben, Backspace löschen, Enter bestätigen" },
      { label: "Solo", text: "Feld wählen und Aufgabe lösen" },
      { label: "Zwei Spieler", text: "Beide spielen gleichzeitig auf getrennten Brettern" },
    ],
    notes: ["Sind 64 Felder voll oder keine Züge mehr möglich, gewinnt die Seite mit mehr Steinen."],
  },
  "nitro-tray-delivery": {
    title: "Nitro-Tablettlieferung",
    catch: "Nicht schütteln und nicht trödeln. Ein explosives 3D-Zeitrennen.",
    genre: "Action",
    dialogue: [
      { speaker: "onaga", text: "Was liefere ich eigentlich?" },
      {
        speaker: "akao",
        text: "Trage ein Tablett mit Nitroglyzerin durch eine gefährliche Fabrik bis ins Ziel.",
      },
      { speaker: "onaga", text: "Das klingt schon schlecht. Was passiert beim Rennen?" },
      {
        speaker: "akao",
        text: "Beschleunigung, Stöße, Wind und Drehstangen füllen die Wackelanzeige. Ist sie voll, kippt die Flasche und explodiert.",
      },
      { speaker: "onaga", text: "Ich muss schnell sein, ohne zu wackeln. Wie?" },
      {
        speaker: "akao",
        text: "Gehe vorsichtig, plane Hindernisse und wähle deine Route. Grüne Tore ziehen fünf Sekunden ab.",
      },
    ],
    features: [
      "3D-Zeitrennen mit einem Nitroglyzerin-Tablett",
      "Vorsichtiges Gehen reduziert Tempo und Wackeln",
      "Ventilatoren, Drehstangen, Wagen und rutschige Böden",
      "Fünf-Sekunden-Tore und Online-Zeitrangliste",
    ],
    controls: [
      { label: "Bewegen", text: "WASD oder Pfeiltasten" },
      { label: "Vorsichtig gehen", text: "Beim Bewegen Space oder Shift halten" },
      { label: "Neu starten", text: "R" },
      { label: "Zum Titel", text: "Esc" },
    ],
    notes: ["Bei voller Wackelanzeige explodiert die Flasche. Jedes grüne Tor spart einmal fünf Sekunden."],
  },
  "pittari-tetromino": {
    title: "Perfektes Tetromino",
    catch: "Baue in zehn Zeitaufgaben exakt die vorgegebene Form.",
    genre: "Puzzle",
    dialogue: [
      { speaker: "onaga", text: "Ist das ein normales Spiel mit fallenden Blöcken?" },
      {
        speaker: "akao",
        text: "Es sind zehn Zeitaufgaben, in denen du mit Tetrominos genau die gezeigte Form bauen musst.",
      },
      { speaker: "onaga", text: "Es geht also nicht nur ums Löschen. Was kommt später?" },
      {
        speaker: "akao",
        text: "Später musst du bestimmte Reihen löschen und gleichzeitig die Endform vorbereiten. Die Reihenfolge zählt.",
      },
      { speaker: "onaga", text: "Klingt schwer. Kann ich üben?" },
      {
        speaker: "akao",
        text: "Es gibt EASY und HARD. Mit R startest du die Aufgabe neu und kannst deine Zeit getrennt eintragen.",
      },
    ],
    features: [
      "Zehn Aufgaben mit exakt vorgegebener Form",
      "Spätere Aufgaben verlangen geplante Reihenlöschungen",
      "EASY- und HARD-Modus",
      "Eigene Zeitrangliste je Modus",
    ],
    controls: [
      { label: "Bewegen", text: "Links/rechts oder A" },
      { label: "Langsam fallen", text: "Pfeil ab oder S" },
      { label: "Drehen", text: "Z, X oder Pfeil auf" },
      { label: "Sofort fallen", text: "Space" },
      { label: "Halten", text: "C" },
      { label: "Aufgabe neu starten", text: "R" },
    ],
  },
  doparhythm: {
    title: "DOPARHYTHM!",
    catch: "Triff Reiznoten und erreiche im 120-Sekunden-Rhythmusspiel die DOPA TIME.",
    genre: "Rhythmus",
    dialogue: [
      { speaker: "onaga", text: "Was für ein Rhythmusspiel ist DOPARHYTHM?" },
      {
        speaker: "akao",
        text: "Triff mit A, S, D und F farbige Reiznoten und halte 120 Sekunden durch.",
      },
      { speaker: "onaga", text: "Da sind auch schwarze Noten mit X. Muss ich die treffen?" },
      {
        speaker: "akao",
        text: "Im Normalmodus weichst du aus. Im DOPA-Modus wehrst du sie mit J, K, L und Semikolon ab.",
      },
      { speaker: "onaga", text: "Was passiert in der DOPA TIME?" },
      {
        speaker: "akao",
        text: "Fülle FEVER, dann erscheinen lange Noten auf allen Spuren. Hämmere alle Tasten. Bei DOPA null ist Schluss.",
      },
    ],
    features: [
      "120 Sekunden Punktejagd",
      "Vier Tasten normal, acht im DOPA-Modus",
      "Volle FEVER-Anzeige startet DOPA TIME",
      "EASY- und HARD-Ranglisten",
    ],
    controls: [
      { label: "Farbnoten normal", text: "A, S, D, F von links" },
      { label: "Negative Noten normal", text: "Ohne Tastendruck ausweichen" },
      { label: "Farbnoten DOPA", text: "A, S, D, F von links" },
      { label: "Negative Noten DOPA", text: "J, K, L, ; von links" },
    ],
    notes: ["Treffer erhöhen Kombo und FEVER; Farbnoten füllen DOPA. Fehler und falsche Tasten senken DOPA."],
  },
  "nazotoki-10s": {
    title: "10er-Rätsel",
    catch: "Erzeuge zehnmal die 10 in diesem Rechenabenteuer.",
    genre: "Puzzle",
    dialogue: [
      { speaker: "onaga", text: "Was bedeutet 10s im Titel?" },
      {
        speaker: "akao",
        text: "Du musst zehnmal die Zahl 10 erzeugen. Kombiniere begrenzte Zahlen mit Grundrechenarten.",
      },
      { speaker: "onaga", text: "Klingt einfach, wenn ich nur Zahlen kombiniere..." },
      {
        speaker: "akao",
        text: "Manche Aufgaben ergeben zunächst keine 10. Finde versteckte Rechenzeichen auf dem Bildschirm.",
      },
      { speaker: "onaga", text: "Gibt es eine Zielzeit?" },
      {
        speaker: "akao",
        text: "Das Ziel sind 20 Minuten. Schaffst du alle Rätsel rechtzeitig?",
      },
    ],
    features: [
      "Besondere Mischung aus Logik und Rechnen",
      "Einfache Touch-Steuerung",
      "Hinweise und vollständige Erklärungen",
      "Zielzeit 20 Minuten",
    ],
  },
  "time-reversi": {
    title: "Time Reversi",
    catch: "Echtzeit-Reversi mit einem Zug alle drei Sekunden.",
    genre: "Brettspiel",
    dialogue: [
      { speaker: "onaga", text: "Bei Reversi spielen beide abwechselnd, oder?" },
      {
        speaker: "akao",
        text: "Hier gibt es keine Runden. Sobald deine drei Sekunden Wartezeit vorbei sind, kannst du setzen.",
      },
      { speaker: "onaga", text: "Sollte ich also immer sofort spielen?" },
      {
        speaker: "akao",
        text: "Das ist das Dilemma. Sofort setzen oder den Gegner abwarten: Timing erweitert das Brettspiel.",
      },
      { speaker: "onaga", text: "Kann ich allein spielen?" },
      {
        speaker: "akao",
        text: "Übe gegen den CPU, spiele per Raum-ID mit Freunden oder kämpfe im Survival gegen immer stärkere Gegner.",
      },
    ],
    features: [
      "Echtzeit-Reversi mit drei Sekunden Wartezeit",
      "CPU und Freunde per Raum-ID",
      "Survival gegen immer stärkere CPU-Gegner",
      "Fähigkeiten wie Freier Stein ohne Wartezeit",
      "Wiederholungen zur Analyse",
    ],
    notes: ["Eine schnelle neue Reversi-Variante. Kostenlos mit In-App-Käufen und mehreren Sprachen."],
  },
};
