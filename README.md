# Enigmi — versione web

Gioco autonomo in HTML, CSS e JavaScript, senza Unity, librerie esterne, CDN o compilazione. Include i 100 enigmi, i titoli italiani, gli indizi e le soluzioni della versione desktop.

## Avvio

Apri `index.html` con un browser moderno. Tutti i file sono locali: non serve una connessione Internet. Mantieni insieme l'intera cartella, comprese le immagini in `assets/puzzles`.

Per un indirizzo locale stabile e un salvataggio associato a quell'indirizzo, se Python è installato apri un terminale nella cartella `web` ed esegui:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Poi visita `http://127.0.0.1:8080`. Chiudi il server con Ctrl+C. L'apertura diretta di `index.html` funziona senza server; la persistenza per gli indirizzi `file://` dipende dal browser e può cambiare se sposti la cartella.

## Gioco

- Usa il tastierino, il campo risposta o i numeri della tastiera. Verifica/Invio controlla la risposta; Backspace elimina una cifra, Canc cancella tutta la risposta.
- Sono accessibili il primo enigma non risolto e tutti quelli già risolti. Le pagine da dieci livelli si possono sfogliare anche quando i livelli sono bloccati.
- Indizio e Soluzione condividono un pannello richiudibile. Non ci sono timer, costi o penalità.
- I progressi sono salvati dopo una risposta corretta. Alla riapertura riparti dal primo enigma non risolto; se sono tutti completati, dal primo.
- Azzera richiede una conferma. Annulla o Esc chiude la conferma senza modificare i progressi.

## Salvataggi

Si usa `localStorage`, chiave `enigmi.web.progress.v1`, nel browser e nell'origine corrente. Non viene utilizzato il Registro di Windows e non si importano automaticamente i progressi Unity. Browser, profili, porte e indirizzi diversi hanno salvataggi separati. La cancellazione dei dati del sito elimina i progressi; in navigazione privata possono durare soltanto per la sessione. Se il browser impedisce il salvataggio compare un avviso.

## File e modifiche

- `index.html`: struttura e testi dell'interfaccia.
- `styles.css`: grafica e adattamento a telefono/tablet/desktop.
- `app.js`: eventi, interfaccia e salvataggi.
- `game.js`: regole del gioco.
- `levels.js`: catalogo con titoli, risposte e immagini; caricato direttamente anche offline.
- `assets/puzzles/`: 300 PNG ritagliati sui margini trasparenti, con soglia alpha > 8 come nel codice Unity. I file originali nel progetto Unity non sono stati modificati.

Le risposte sono contenute nel codice locale, come normalmente avviene in un gioco statico senza server. Le figure rimangono immagini: le etichette accessibili identificano gli enigmi, ma non ne trascrivono integralmente il contenuto matematico.

## Controlli

Con Node.js installato, dalla cartella `web`:

```powershell
node game.test.cjs
```

Il test verifica le 100 risposte, la disponibilità delle 300 immagini, sblocchi, validazione input, ripresa, salvataggi fuori ordine, finale e azzeramento, senza accedere ai progressi del browser.

## Provenienza

Alcune immagini provengono dai file del gioco originale già presenti nel progetto Unity.
