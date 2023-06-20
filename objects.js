// Calcula o perímetro e a área de um retângulo
function calcularRetangulo(retangulo) {
    // Sua implementação aqui
    var largura = retangulo.largura;
  var altura = retangulo.altura;

  var perimetro = 2 * (largura + altura);
  var area = largura * altura;

  return {
    perimetro: perimetro,
    area: area
  };
}

// Exemplo de uso
var retangulo = {
  largura: 5,
  altura: 8
};

var resultado = calcularRetangulo(retangulo);
console.log("Perímetro:", resultado.perimetro);
console.log("Área:", resultado.area);


// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa) {
    // Sua implementação aqui
    var idade = pessoa.idade;

  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}

// Exemplo de uso
var pessoa = {
  nome: 'John',
  idade: 25,
  cidade: 'New York'
};

var resultado = ehAdulto(pessoa);
console.log(resultado);

// Concatena os valores de um objeto em uma string
function concatenaValores(obj) {
    // Sua implementação aqui
    var valores = Object.values(obj);
  var resultado = valores.join(' ');

  return resultado;
}

// Exemplo de uso
var obj = {
  nome: 'Bob',
  idade: 35,
  cidade: 'London'
};

var stringConcatenada = concatenaValores(obj);
console.log(stringConcatenada);

module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
