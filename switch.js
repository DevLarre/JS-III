// Retorna o dia da semana correspondente a um número
function retornaDiaSemana(number) {
    // Sua implementação aqui
    var diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    if (number < 1 || number > 7) {
      return 'Número inválido';
    }
  
    return diasSemana[number - 1];
  }

// Retorna o preço do produto com base no código de produto
function retornaPrecoProduto(code) {
    // Sua implementação aqui
    var precos = {
        A: 10.99,
        B: 5.99,
        C: 8.99,
        D: 'Código inválido'
      };
    
      var preco = precos[code];
    
      if (preco === undefined) {
        return 'Código de produto inválido';
      }
    
      return preco;
    }

// Retorna a categoria do produto com base no tipo de produto
function retornaCategoriaProduto(type) {
    // Sua implementação aqui
    var categorias = {
        A: 'Eletrônicos',
        B: 'Roupas',
        C: 'Alimentos',
        D: 'Livros'
      };
    
      var categoria = categorias[type];
    
      if (categoria === undefined) {
        return 'Tecnologia';
      }
    
      return categoria;
    }

module.exports = { retornaDiaSemana, retornaPrecoProduto, retornaCategoriaProduto };