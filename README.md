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

## Mobile e installazione

- Il pulsante **Schermo intero** compare nei browser che supportano questa funzione; permette anche di uscire dalla modalità a schermo intero.
- Il manifest e le icone PNG consentono ai browser compatibili di installare il gioco come app, con avvio a schermo intero (o nella modalità alternativa supportata dal browser). Pubblica anche `manifest.webmanifest` e `assets/icons/` insieme agli altri file, su HTTPS. Poi ricarica il sito su Android/Chrome e riprova **Installa e crea scorciatoia**. L'installazione non è disponibile aprendo un file locale.
- Non è previsto un service worker: l'app installata richiede la connessione per caricare il sito; non viene aggiunta una cache offline gestita dal gioco.
- I tocchi sui pulsanti abilitati producono una breve vibrazione se supportata dal browser e dal dispositivo; le impostazioni del sistema possono impedirla. Safari su iPhone non supporta questa API.
- Dopo errori consecutivi, **Verifica** svuota il messaggio rosso per 160 ms e poi mostra il nuovo errore, anche quando il testo è identico.

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
