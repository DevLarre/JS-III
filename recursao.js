// Soma dos números inteiros de 1 a n
function somaNumeros(n) {
  // Sua implementação aqui
  var soma = 0;

  for (var i = 1; i <= n; i++) {
    soma += i;
  }

  return soma;
}  


// Verifica se um número é par
function ehPar(number) {
  // Sua implementação aqui
  return number % 2 === 0;
}

function fibonacci(n) { // Por falta de descrição nessa pedi ajuda ao Tio Google!!!
  // Sua implementação aqui
  if (n <= 0) {
    return 'O valor de n deve ser maior que zero.';
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  var fibMinus2 = 1;
  var fibMinus1 = 1;
  var fibN = 0;

  for (var i = 3; i <= n; i++) {
    fibN = fibMinus1 + fibMinus2;
    fibMinus2 = fibMinus1;
    fibMinus1 = fibN;
  }

  return fibN;
}

module.exports = { somaNumeros, ehPar, fibonacci };