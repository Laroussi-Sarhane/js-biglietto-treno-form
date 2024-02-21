function calcolaPrezzoBiglietto() {
  // Chiedi all'utente il numero di chilometri da percorrere
  const kmDaPercorrere = parseFloat(prompt("Inserisci il numero di chilometri da percorrere:"));

  // Chiedi  l'età del passeggero
  const etaPasseggero = parseInt(prompt("Inserisci l'età del passeggero:"));

  // Calcola il prezzo del biglietto in base ai chilometri (0.21 € al km)
  let prezzoBase = kmDaPercorrere * 0.21;

  //  sconti in base all'età
  if (etaPasseggero < 18) {
      // Sconto del 20% per i minorenni
      prezzoBase *= 0.8;
  } else if (etaPasseggero >= 65) {
      // Sconto del 40% per gli over 65
      prezzoBase *= 0.6;
  }

  
  console.log(`Il prezzo del biglietto è: ${prezzoBase.toFixed(2)} €`);
}

