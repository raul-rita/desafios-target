function pertenceFibonacci(num) {
  if (num < 0) {
    return false;
  }

  let a = 0;
  let b = 1;

  if (num === a || num === b) {
    return true;
  }

  let proximoNumero = a + b;

  while (proximoNumero <= num) {
    if (proximoNumero === num) {
      return true;
    }
    a = b;
    b = proximoNumero;
    proximoNumero = a + b;
  }

  return false;
}

function verificarFibonacci(num) {
  if (pertenceFibonacci(num)) {
    console.log(`O número ${num} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
  }
}

const numero = 15; 
verificarFibonacci(numero);
