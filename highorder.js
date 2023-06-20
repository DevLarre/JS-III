// Implemente a função 'dobrarNumeros' que recebe um array de números
// e retorna um novo array com cada número dobrado.
function dobrarNumeros(numeros) {
    // Sua implementação aqui
    var resultado = [];

  for (var i = 0; i < numeros.length; i++) {
    var numeroDobrado = numeros[i] * 2;
    resultado.push(numeroDobrado);
  }

  return resultado;
}

// Implemente a função 'somarValores' que recebe um array de números
// e retorna a soma de todos os valores.
function somarValores(numeros) {
    // Sua implementação aqui
    var soma = 0;

  for (var i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  return soma;
}

// Implemente a função 'filtrarPares' que recebe um array de números
// e retorna um novo array contendo apenas os números pares.
function filtrarPares(numeros) {
    // Sua implementação aqui
    var numerosPares = [];

  for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      numerosPares.push(numeros[i]);
    }
  }

  return numerosPares;
}

module.exports = {
    dobrarNumeros,
    somarValores,
    filtrarPares
};