const imprimer_diamant = (lettre) => {
  const n = lettre.charCodeAt(0) - "A".charCodeAt(0);
  let diamant = [];

  for (let i = 0; i <= n; i++) {
    const espaces = " ".repeat(n - i);
    let lettres = String.fromCharCode("A".charCodeAt(0) + i);
    if (i > 0) {
      lettres +=
        " ".repeat(i * 2 - 1) + String.fromCharCode("A".charCodeAt(0) + i);
    }
    const ligne = espaces + lettres + espaces;
    diamant.push(ligne);
  }

  for (let i = n - 1; i >= 0; i--) {
    const espaces = " ".repeat(n - i);
    let lettres = String.fromCharCode("A".charCodeAt(0) + i);
    if (i > 0) {
      lettres +=
        " ".repeat(i * 2 - 1) + String.fromCharCode("A".charCodeAt(0) + i);
    }
    const ligne = espaces + lettres + espaces;
    diamant.push(ligne);
  }

  return diamant.join("\n");
};

export default imprimer_diamant;
