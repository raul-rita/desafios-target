function contarLetraA(palavraOuFrase) {
  let contador = 0;

  for (let i = 0; i < palavraOuFrase.length; i++) {
      if (palavraOuFrase[i] === 'a' || palavraOuFrase[i] === 'A') {
          contador++;
      }
  }

  if (contador > 0) {
      console.log(`A letra 'a' aparece ${contador} vezes na String.`);
  } else {
      console.log("A letra 'a' não aparece na String.");
  }
}

const texto = "Quero passar no teste da Target";

contarLetraA(texto);
