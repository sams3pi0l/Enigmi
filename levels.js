// Local catalog: no network request required.
const ENIGMI_LEVELS = [
  {
    "id": 1,
    "answer": 32,
    "puzzle": "assets/puzzles/Level1.png",
    "hint": "assets/puzzles/Hint1.png",
    "solution": "assets/puzzles/Answer1.png",
    "title": "Il prossimo numero"
  },
  {
    "id": 2,
    "answer": 6,
    "puzzle": "assets/puzzles/Level2.png",
    "hint": "assets/puzzles/Hint2.png",
    "solution": "assets/puzzles/Answer2.png",
    "title": "Prima di sommare"
  },
  {
    "id": 3,
    "answer": 6,
    "puzzle": "assets/puzzles/Level3.png",
    "hint": "assets/puzzles/Hint3.png",
    "solution": "assets/puzzles/Answer3.png",
    "title": "Il valore delle forme"
  },
  {
    "id": 4,
    "answer": 10,
    "puzzle": "assets/puzzles/Level4.png",
    "hint": "assets/puzzles/Hint4.png",
    "solution": "assets/puzzles/Answer4.png",
    "title": "La regola nascosta"
  },
  {
    "id": 5,
    "answer": 25,
    "puzzle": "assets/puzzles/Level5.png",
    "hint": "assets/puzzles/Hint5.png",
    "solution": "assets/puzzles/Answer5.png",
    "title": "Un passo alla volta"
  },
  {
    "id": 6,
    "answer": 25,
    "puzzle": "assets/puzzles/Level6.png",
    "hint": "assets/puzzles/Hint6.png",
    "solution": "assets/puzzles/Answer6.png",
    "title": "Ordine e operazioni"
  },
  {
    "id": 7,
    "answer": 14,
    "puzzle": "assets/puzzles/Level7.png",
    "hint": "assets/puzzles/Hint7.png",
    "solution": "assets/puzzles/Answer7.png",
    "title": "Quanti quadrati?"
  },
  {
    "id": 8,
    "answer": 5,
    "puzzle": "assets/puzzles/Level8.png",
    "hint": "assets/puzzles/Hint8.png",
    "solution": "assets/puzzles/Answer8.png",
    "title": "Due incognite"
  },
  {
    "id": 9,
    "answer": 39,
    "puzzle": "assets/puzzles/Level9.png",
    "hint": "assets/puzzles/Hint9.png",
    "solution": "assets/puzzles/Answer9.png",
    "title": "Coppie di numeri"
  },
  {
    "id": 10,
    "answer": 2,
    "puzzle": "assets/puzzles/Level10.png",
    "hint": "assets/puzzles/Hint10.png",
    "solution": "assets/puzzles/Answer10.png",
    "title": "Da sinistra a destra"
  },
  {
    "id": 11,
    "answer": 8113,
    "puzzle": "assets/puzzles/Level11.png",
    "hint": "assets/puzzles/Hint11.png",
    "solution": "assets/puzzles/Answer11.png",
    "title": "Quattro cifre"
  },
  {
    "id": 12,
    "answer": 26,
    "puzzle": "assets/puzzles/Level12.png",
    "hint": "assets/puzzles/Hint12.png",
    "solution": "assets/puzzles/Answer12.png",
    "title": "Trova la relazione"
  },
  {
    "id": 13,
    "answer": 48,
    "puzzle": "assets/puzzles/Level13.png",
    "hint": "assets/puzzles/Hint13.png",
    "solution": "assets/puzzles/Answer13.png",
    "title": "Numeri in sequenza"
  },
  {
    "id": 14,
    "answer": 13,
    "puzzle": "assets/puzzles/Level14.png",
    "hint": "assets/puzzles/Hint14.png",
    "solution": "assets/puzzles/Answer14.png",
    "title": "Legami nascosti"
  },
  {
    "id": 15,
    "answer": 1,
    "puzzle": "assets/puzzles/Level15.png",
    "hint": "assets/puzzles/Hint15.png",
    "solution": "assets/puzzles/Answer15.png",
    "title": "Osserva le forme"
  },
  {
    "id": 16,
    "answer": 90,
    "puzzle": "assets/puzzles/Level16.png",
    "hint": "assets/puzzles/Hint16.png",
    "solution": "assets/puzzles/Answer16.png",
    "title": "Una nuova regola"
  },
  {
    "id": 17,
    "answer": 5,
    "puzzle": "assets/puzzles/Level17.png",
    "hint": "assets/puzzles/Hint17.png",
    "solution": "assets/puzzles/Answer17.png",
    "title": "Conta con attenzione"
  },
  {
    "id": 18,
    "answer": 63,
    "puzzle": "assets/puzzles/Level18.png",
    "hint": "assets/puzzles/Hint18.png",
    "solution": "assets/puzzles/Answer18.png",
    "title": "Completa lo schema"
  },
  {
    "id": 19,
    "answer": 21,
    "puzzle": "assets/puzzles/Level19.png",
    "hint": "assets/puzzles/Hint19.png",
    "solution": "assets/puzzles/Answer19.png",
    "title": "Il numero mancante"
  },
  {
    "id": 20,
    "answer": 4,
    "puzzle": "assets/puzzles/Level20.png",
    "hint": "assets/puzzles/Hint20.png",
    "solution": "assets/puzzles/Answer20.png",
    "title": "L’ultimo passo"
  },
  {
    "id": 21,
    "answer": 7831,
    "puzzle": "assets/puzzles/Level21.png",
    "hint": "assets/puzzles/Hint21.png",
    "solution": "assets/puzzles/Answer21.png",
    "title": "Lettere e cifre"
  },
  {
    "id": 22,
    "answer": 41,
    "puzzle": "assets/puzzles/Level22.png",
    "hint": "assets/puzzles/Hint22.png",
    "solution": "assets/puzzles/Answer22.png",
    "title": "Raddoppia e aggiungi"
  },
  {
    "id": 23,
    "answer": 4,
    "puzzle": "assets/puzzles/Level23.png",
    "hint": "assets/puzzles/Hint23.png",
    "solution": "assets/puzzles/Answer23.png",
    "title": "Quadrati nascosti"
  },
  {
    "id": 24,
    "answer": 27,
    "puzzle": "assets/puzzles/Level24.png",
    "hint": "assets/puzzles/Hint24.png",
    "solution": "assets/puzzles/Answer24.png",
    "title": "Prodotti e somme"
  },
  {
    "id": 25,
    "answer": 44,
    "puzzle": "assets/puzzles/Level25.png",
    "hint": "assets/puzzles/Hint25.png",
    "solution": "assets/puzzles/Answer25.png",
    "title": "Dimezza la differenza"
  },
  {
    "id": 26,
    "answer": 17,
    "puzzle": "assets/puzzles/Level26.png",
    "hint": "assets/puzzles/Hint26.png",
    "solution": "assets/puzzles/Answer26.png",
    "title": "Intorno alla figura"
  },
  {
    "id": 27,
    "answer": 7,
    "puzzle": "assets/puzzles/Level27.png",
    "hint": "assets/puzzles/Hint27.png",
    "solution": "assets/puzzles/Answer27.png",
    "title": "Numeri a raggiera"
  },
  {
    "id": 28,
    "answer": 49,
    "puzzle": "assets/puzzles/Level28.png",
    "hint": "assets/puzzles/Hint28.png",
    "solution": "assets/puzzles/Answer28.png",
    "title": "Somme al quadrato"
  },
  {
    "id": 29,
    "answer": 64,
    "puzzle": "assets/puzzles/Level29.png",
    "hint": "assets/puzzles/Hint29.png",
    "solution": "assets/puzzles/Answer29.png",
    "title": "La griglia dei multipli"
  },
  {
    "id": 30,
    "answer": 61,
    "puzzle": "assets/puzzles/Level30.png",
    "hint": "assets/puzzles/Hint30.png",
    "solution": "assets/puzzles/Answer30.png",
    "title": "Sottrazioni in sequenza"
  },
  {
    "id": 31,
    "answer": 17,
    "puzzle": "assets/puzzles/Level31.png",
    "hint": "assets/puzzles/Hint31.png",
    "solution": "assets/puzzles/Answer31.png",
    "title": "Potenze e somme"
  },
  {
    "id": 32,
    "answer": 10,
    "puzzle": "assets/puzzles/Level32.png",
    "hint": "assets/puzzles/Hint32.png",
    "solution": "assets/puzzles/Answer32.png",
    "title": "Somme a raggiera"
  },
  {
    "id": 33,
    "answer": 26,
    "puzzle": "assets/puzzles/Level33.png",
    "hint": "assets/puzzles/Hint33.png",
    "solution": "assets/puzzles/Answer33.png",
    "title": "Coppie al quadrato"
  },
  {
    "id": 34,
    "answer": 4,
    "puzzle": "assets/puzzles/Level34.png",
    "hint": "assets/puzzles/Hint34.png",
    "solution": "assets/puzzles/Answer34.png",
    "title": "Rapporti opposti"
  },
  {
    "id": 35,
    "answer": 4,
    "puzzle": "assets/puzzles/Level35.png",
    "hint": "assets/puzzles/Hint35.png",
    "solution": "assets/puzzles/Answer35.png",
    "title": "La media nascosta"
  },
  {
    "id": 36,
    "answer": 2,
    "puzzle": "assets/puzzles/Level36.png",
    "hint": "assets/puzzles/Hint36.png",
    "solution": "assets/puzzles/Answer36.png",
    "title": "La scala delle differenze"
  },
  {
    "id": 37,
    "answer": 23,
    "puzzle": "assets/puzzles/Level37.png",
    "hint": "assets/puzzles/Hint37.png",
    "solution": "assets/puzzles/Answer37.png",
    "title": "Prodotto e addendi"
  },
  {
    "id": 38,
    "answer": 81,
    "puzzle": "assets/puzzles/Level38.png",
    "hint": "assets/puzzles/Hint38.png",
    "solution": "assets/puzzles/Answer38.png",
    "title": "Cifre allo specchio"
  },
  {
    "id": 39,
    "answer": 16,
    "puzzle": "assets/puzzles/Level39.png",
    "hint": "assets/puzzles/Hint39.png",
    "solution": "assets/puzzles/Answer39.png",
    "title": "Triangoli in progressione"
  },
  {
    "id": 40,
    "answer": 2,
    "puzzle": "assets/puzzles/Level40.png",
    "hint": "assets/puzzles/Hint40.png",
    "solution": "assets/puzzles/Answer40.png",
    "title": "Equilibrio nel rombo"
  },
  {
    "id": 41,
    "answer": 12,
    "puzzle": "assets/puzzles/Level41.png",
    "hint": "assets/puzzles/Hint41.png",
    "solution": "assets/puzzles/Answer41.png",
    "title": "Radici nascoste"
  },
  {
    "id": 42,
    "answer": 9,
    "puzzle": "assets/puzzles/Level42.png",
    "hint": "assets/puzzles/Hint42.png",
    "solution": "assets/puzzles/Answer42.png",
    "title": "Dividi per tre"
  },
  {
    "id": 43,
    "answer": 48,
    "puzzle": "assets/puzzles/Level43.png",
    "hint": "assets/puzzles/Hint43.png",
    "solution": "assets/puzzles/Answer43.png",
    "title": "Un passo prima del prodotto"
  },
  {
    "id": 44,
    "answer": 160,
    "puzzle": "assets/puzzles/Level44.png",
    "hint": "assets/puzzles/Hint44.png",
    "solution": "assets/puzzles/Answer44.png",
    "title": "La differenza costante"
  },
  {
    "id": 45,
    "answer": 55,
    "puzzle": "assets/puzzles/Level45.png",
    "hint": "assets/puzzles/Hint45.png",
    "solution": "assets/puzzles/Answer45.png",
    "title": "Prodotti a raggiera"
  },
  {
    "id": 46,
    "answer": 7,
    "puzzle": "assets/puzzles/Level46.png",
    "hint": "assets/puzzles/Hint46.png",
    "solution": "assets/puzzles/Answer46.png",
    "title": "Somma e differenza"
  },
  {
    "id": 47,
    "answer": 35,
    "puzzle": "assets/puzzles/Level47.png",
    "hint": "assets/puzzles/Hint47.png",
    "solution": "assets/puzzles/Answer47.png",
    "title": "Il giro del quadrato"
  },
  {
    "id": 48,
    "answer": 3,
    "puzzle": "assets/puzzles/Level48.png",
    "hint": "assets/puzzles/Hint48.png",
    "solution": "assets/puzzles/Answer48.png",
    "title": "Somma e sottrazione"
  },
  {
    "id": 49,
    "answer": 14,
    "puzzle": "assets/puzzles/Level49.png",
    "hint": "assets/puzzles/Hint49.png",
    "solution": "assets/puzzles/Answer49.png",
    "title": "Prodotti nel rombo"
  },
  {
    "id": 50,
    "answer": 30,
    "puzzle": "assets/puzzles/Level50.png",
    "hint": "assets/puzzles/Hint50.png",
    "solution": "assets/puzzles/Answer50.png",
    "title": "Incrementi crescenti"
  },
  {
    "id": 51,
    "answer": 2329,
    "puzzle": "assets/puzzles/Level51.png",
    "hint": "assets/puzzles/Hint51.png",
    "solution": "assets/puzzles/Answer51.png",
    "title": "Differenza e somma"
  },
  {
    "id": 52,
    "answer": 8104,
    "puzzle": "assets/puzzles/Level52.png",
    "hint": "assets/puzzles/Hint52.png",
    "solution": "assets/puzzles/Answer52.png",
    "title": "Quattro sequenze"
  },
  {
    "id": 53,
    "answer": 12,
    "puzzle": "assets/puzzles/Level53.png",
    "hint": "assets/puzzles/Hint53.png",
    "solution": "assets/puzzles/Answer53.png",
    "title": "Prodotto e quoziente"
  },
  {
    "id": 54,
    "answer": 100,
    "puzzle": "assets/puzzles/Level54.png",
    "hint": "assets/puzzles/Hint54.png",
    "solution": "assets/puzzles/Answer54.png",
    "title": "Triangoli e moltiplicatori"
  },
  {
    "id": 55,
    "answer": 9,
    "puzzle": "assets/puzzles/Level55.png",
    "hint": "assets/puzzles/Hint55.png",
    "solution": "assets/puzzles/Answer55.png",
    "title": "Radici nel cerchio"
  },
  {
    "id": 56,
    "answer": 9,
    "puzzle": "assets/puzzles/Level56.png",
    "hint": "assets/puzzles/Hint56.png",
    "solution": "assets/puzzles/Answer56.png",
    "title": "Differenze al quadrato"
  },
  {
    "id": 57,
    "answer": 121,
    "puzzle": "assets/puzzles/Level57.png",
    "hint": "assets/puzzles/Hint57.png",
    "solution": "assets/puzzles/Answer57.png",
    "title": "Somme e quadrati"
  },
  {
    "id": 58,
    "answer": 13,
    "puzzle": "assets/puzzles/Level58.png",
    "hint": "assets/puzzles/Hint58.png",
    "solution": "assets/puzzles/Answer58.png",
    "title": "Conta i quadrati"
  },
  {
    "id": 59,
    "answer": 7,
    "puzzle": "assets/puzzles/Level59.png",
    "hint": "assets/puzzles/Hint59.png",
    "solution": "assets/puzzles/Answer59.png",
    "title": "La piramide delle medie"
  },
  {
    "id": 60,
    "answer": 1,
    "puzzle": "assets/puzzles/Level60.png",
    "hint": "assets/puzzles/Hint60.png",
    "solution": "assets/puzzles/Answer60.png",
    "title": "Differenze intorno alla figura"
  },
  {
    "id": 61,
    "answer": 33,
    "puzzle": "assets/puzzles/Level61.png",
    "hint": "assets/puzzles/Hint61.png",
    "solution": "assets/puzzles/Answer61.png",
    "title": "Somma le equazioni"
  },
  {
    "id": 62,
    "answer": 42,
    "puzzle": "assets/puzzles/Level62.png",
    "hint": "assets/puzzles/Hint62.png",
    "solution": "assets/puzzles/Answer62.png",
    "title": "Raddoppia e incrementa"
  },
  {
    "id": 63,
    "answer": 22,
    "puzzle": "assets/puzzles/Level63.png",
    "hint": "assets/puzzles/Hint63.png",
    "solution": "assets/puzzles/Answer63.png",
    "title": "Prodotti incrociati"
  },
  {
    "id": 64,
    "answer": 9,
    "puzzle": "assets/puzzles/Level64.png",
    "hint": "assets/puzzles/Hint64.png",
    "solution": "assets/puzzles/Answer64.png",
    "title": "Differenza di prodotti"
  },
  {
    "id": 65,
    "answer": 38,
    "puzzle": "assets/puzzles/Level65.png",
    "hint": "assets/puzzles/Hint65.png",
    "solution": "assets/puzzles/Answer65.png",
    "title": "Raddoppia e sottrai"
  },
  {
    "id": 66,
    "answer": 7,
    "puzzle": "assets/puzzles/Level66.png",
    "hint": "assets/puzzles/Hint66.png",
    "solution": "assets/puzzles/Answer66.png",
    "title": "Somma delle cifre"
  },
  {
    "id": 67,
    "answer": 12,
    "puzzle": "assets/puzzles/Level67.png",
    "hint": "assets/puzzles/Hint67.png",
    "solution": "assets/puzzles/Answer67.png",
    "title": "Somme nel cerchio"
  },
  {
    "id": 68,
    "answer": 11,
    "puzzle": "assets/puzzles/Level68.png",
    "hint": "assets/puzzles/Hint68.png",
    "solution": "assets/puzzles/Answer68.png",
    "title": "Prodotti in equilibrio"
  },
  {
    "id": 69,
    "answer": 17,
    "puzzle": "assets/puzzles/Level69.png",
    "hint": "assets/puzzles/Hint69.png",
    "solution": "assets/puzzles/Answer69.png",
    "title": "Quadrati di quaranta"
  },
  {
    "id": 70,
    "answer": 13,
    "puzzle": "assets/puzzles/Level70.png",
    "hint": "assets/puzzles/Hint70.png",
    "solution": "assets/puzzles/Answer70.png",
    "title": "La sequenza dei primi"
  },
  {
    "id": 71,
    "answer": 0,
    "puzzle": "assets/puzzles/Level71.png",
    "hint": "assets/puzzles/Hint71.png",
    "solution": "assets/puzzles/Answer71.png",
    "title": "Conta i lati"
  },
  {
    "id": 72,
    "answer": 55,
    "puzzle": "assets/puzzles/Level72.png",
    "hint": "assets/puzzles/Hint72.png",
    "solution": "assets/puzzles/Answer72.png",
    "title": "Moltiplica e sottrai"
  },
  {
    "id": 73,
    "answer": 10,
    "puzzle": "assets/puzzles/Level73.png",
    "hint": "assets/puzzles/Hint73.png",
    "solution": "assets/puzzles/Answer73.png",
    "title": "Aggiungi e dividi"
  },
  {
    "id": 74,
    "answer": 20,
    "puzzle": "assets/puzzles/Level74.png",
    "hint": "assets/puzzles/Hint74.png",
    "solution": "assets/puzzles/Answer74.png",
    "title": "Somme nei quadrati"
  },
  {
    "id": 75,
    "answer": 31,
    "puzzle": "assets/puzzles/Level75.png",
    "hint": "assets/puzzles/Hint75.png",
    "solution": "assets/puzzles/Answer75.png",
    "title": "Incrementi al quadrato"
  },
  {
    "id": 76,
    "answer": 481,
    "puzzle": "assets/puzzles/Level76.png",
    "hint": "assets/puzzles/Hint76.png",
    "solution": "assets/puzzles/Answer76.png",
    "title": "Quadrati in coppia"
  },
  {
    "id": 77,
    "answer": 9,
    "puzzle": "assets/puzzles/Level77.png",
    "hint": "assets/puzzles/Hint77.png",
    "solution": "assets/puzzles/Answer77.png",
    "title": "Completa a venti"
  },
  {
    "id": 78,
    "answer": 20,
    "puzzle": "assets/puzzles/Level78.png",
    "hint": "assets/puzzles/Hint78.png",
    "solution": "assets/puzzles/Answer78.png",
    "title": "Tre numeri in equilibrio"
  },
  {
    "id": 79,
    "answer": 564,
    "puzzle": "assets/puzzles/Level79.png",
    "hint": "assets/puzzles/Hint79.png",
    "solution": "assets/puzzles/Answer79.png",
    "title": "Sottrai centoventitré"
  },
  {
    "id": 80,
    "answer": 136,
    "puzzle": "assets/puzzles/Level80.png",
    "hint": "assets/puzzles/Hint80.png",
    "solution": "assets/puzzles/Answer80.png",
    "title": "Aggiungi le cifre"
  },
  {
    "id": 81,
    "answer": 6,
    "puzzle": "assets/puzzles/Level81.png",
    "hint": "assets/puzzles/Hint81.png",
    "solution": "assets/puzzles/Answer81.png",
    "title": "Differenze divise"
  },
  {
    "id": 82,
    "answer": 26,
    "puzzle": "assets/puzzles/Level82.png",
    "hint": "assets/puzzles/Hint82.png",
    "solution": "assets/puzzles/Answer82.png",
    "title": "Somma di quadrati"
  },
  {
    "id": 83,
    "answer": 2,
    "puzzle": "assets/puzzles/Level83.png",
    "hint": "assets/puzzles/Hint83.png",
    "solution": "assets/puzzles/Answer83.png",
    "title": "Prodotto e divisione"
  },
  {
    "id": 84,
    "answer": 6,
    "puzzle": "assets/puzzles/Level84.png",
    "hint": "assets/puzzles/Hint84.png",
    "solution": "assets/puzzles/Answer84.png",
    "title": "Differenze opposte"
  },
  {
    "id": 85,
    "answer": 2842,
    "puzzle": "assets/puzzles/Level85.png",
    "hint": "assets/puzzles/Hint85.png",
    "solution": "assets/puzzles/Answer85.png",
    "title": "Prodotti in coppia"
  },
  {
    "id": 86,
    "answer": 111,
    "puzzle": "assets/puzzles/Level86.png",
    "hint": "assets/puzzles/Hint86.png",
    "solution": "assets/puzzles/Answer86.png",
    "title": "Incrementi di undici"
  },
  {
    "id": 87,
    "answer": 50,
    "puzzle": "assets/puzzles/Level87.png",
    "hint": "assets/puzzles/Hint87.png",
    "solution": "assets/puzzles/Answer87.png",
    "title": "Divisioni nel cerchio"
  },
  {
    "id": 88,
    "answer": 5,
    "puzzle": "assets/puzzles/Level88.png",
    "hint": "assets/puzzles/Hint88.png",
    "solution": "assets/puzzles/Answer88.png",
    "title": "Prodotti opposti"
  },
  {
    "id": 89,
    "answer": 75,
    "puzzle": "assets/puzzles/Level89.png",
    "hint": "assets/puzzles/Hint89.png",
    "solution": "assets/puzzles/Answer89.png",
    "title": "Sottrai i quadrati"
  },
  {
    "id": 90,
    "answer": 80,
    "puzzle": "assets/puzzles/Level90.png",
    "hint": "assets/puzzles/Hint90.png",
    "solution": "assets/puzzles/Answer90.png",
    "title": "Prima e dopo"
  },
  {
    "id": 91,
    "answer": 54,
    "puzzle": "assets/puzzles/Level91.png",
    "hint": "assets/puzzles/Hint91.png",
    "solution": "assets/puzzles/Answer91.png",
    "title": "Dieci volte meno"
  },
  {
    "id": 92,
    "answer": 25,
    "puzzle": "assets/puzzles/Level92.png",
    "hint": "assets/puzzles/Hint92.png",
    "solution": "assets/puzzles/Answer92.png",
    "title": "Somme in colonna"
  },
  {
    "id": 93,
    "answer": 23,
    "puzzle": "assets/puzzles/Level93.png",
    "hint": "assets/puzzles/Hint93.png",
    "solution": "assets/puzzles/Answer93.png",
    "title": "Completa a cento"
  },
  {
    "id": 94,
    "answer": 60,
    "puzzle": "assets/puzzles/Level94.png",
    "hint": "assets/puzzles/Hint94.png",
    "solution": "assets/puzzles/Answer94.png",
    "title": "Prodotti nell’esagono"
  },
  {
    "id": 95,
    "answer": 3,
    "puzzle": "assets/puzzles/Level95.png",
    "hint": "assets/puzzles/Hint95.png",
    "solution": "assets/puzzles/Answer95.png",
    "title": "Rispetta le precedenze"
  },
  {
    "id": 96,
    "answer": 14,
    "puzzle": "assets/puzzles/Level96.png",
    "hint": "assets/puzzles/Hint96.png",
    "solution": "assets/puzzles/Answer96.png",
    "title": "Radici nei triangoli"
  },
  {
    "id": 97,
    "answer": 9,
    "puzzle": "assets/puzzles/Level97.png",
    "hint": "assets/puzzles/Hint97.png",
    "solution": "assets/puzzles/Answer97.png",
    "title": "La radice della somma"
  },
  {
    "id": 98,
    "answer": 10,
    "puzzle": "assets/puzzles/Level98.png",
    "hint": "assets/puzzles/Hint98.png",
    "solution": "assets/puzzles/Answer98.png",
    "title": "Quozienti nel cerchio"
  },
  {
    "id": 99,
    "answer": 531,
    "puzzle": "assets/puzzles/Level99.png",
    "hint": "assets/puzzles/Hint99.png",
    "solution": "assets/puzzles/Answer99.png",
    "title": "Numero e cifre"
  },
  {
    "id": 100,
    "answer": 619,
    "puzzle": "assets/puzzles/Level100.png",
    "hint": "assets/puzzles/Hint100.png",
    "solution": "assets/puzzles/Answer100.png",
    "title": "Cento volte meno"
  }
];
if (typeof module !== "undefined") module.exports = ENIGMI_LEVELS;
