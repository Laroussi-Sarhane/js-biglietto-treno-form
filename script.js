function calcolaPrezzoBiglietto() {
  // Chiedi all'utente il numero di chilometri da percorrere
  const kmDaPercorrere = parseFloat(prompt("Inserisci il numero di chilometri da percorrere:"));

  // Chiedi all'utente l'età del passeggero
  const etaPasseggero = parseInt(prompt("Inserisci l'età del passeggero:"));

  // Calcola il prezzo del biglietto in base ai chilometri (0.21 € al km)
  let prezzoBase = kmDaPercorrere * 0.21;

  // Applica gli sconti in base all'età
  if (etaPasseggero < 18) {
      // Sconto del 20% per i minorenni
      prezzoBase *= 0.8;
  } else if (etaPasseggero >= 65) {
      // Sconto del 40% per gli over 65
      prezzoBase *= 0.6;
  }

  // Mostra il prezzo finale nella console
  console.log(`Il prezzo del biglietto è: ${prezzoBase.toFixed(2)} €`);
}

function calcolaPrezzo() {
  const kmDaPercorrere = parseFloat(document.getElementById("km").value);
  const etaPasseggero = parseInt(document.getElementById("eta").value);

  let prezzoBase = kmDaPercorrere * 0.21;

  if (etaPasseggero < 18) {
      prezzoBase *= 0.8;
  } else if (etaPasseggero >= 65) {
      prezzoBase *= 0.6;
  }

  // Mostra il risultato nella pagina
  const risultatoElement = document.getElementById("risultato");
  risultatoElement.innerHTML = `Il prezzo del biglietto è: ${prezzoBase.toFixed(2)} €`;
}
