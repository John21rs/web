const pessoa = [];

do {
  var opcao = prompt("1. Salvar Imóvel\n2. Mostrar Imóveis\n3. Sair");
  switch (opcao) {
    case "1":
      var nome = prompt("Nome do proprietário: ");
      var quartos = prompt("Quantidade de quartos: ");
      var banheiros = prompt("Quantidade de banheiros: ");
      var garagem = prompt("Possui garagem? Sim/não");
      pessoa.push({
        nome: nome,
        quartos: quartos,
        banheiros: banheiros,
        garagem: garagem,
      });
      break;
    case "2":
      var texto = "";
      for (var i = 0; i < pessoa.length; i++) {
        texto +=
          "Nome: " +
          pessoa[i].nome +
          "\nQuarto: " +
          pessoa[i].quartos +
          "\nBanheiro: " +
          pessoa[i].banheiros +
          "\nGaragem: " +
          pessoa[i].garagem +
          "\n\n";
      }
      alert(texto);
      break;
    case "3":
      alert("Saindo");
      break;
  }
} while (opcao !== "3");
