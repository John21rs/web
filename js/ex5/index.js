do {
  var opcao = 0;
  opcao = parseInt(prompt("Digite uma opção de 1 a 5"));
  switch (opcao) {
    case 5:
      alert("Saindo...");
      break;
  }
} while (opcao !== 5);

var quantia = parseInt(prompt("Quanto você tem?"));
var gerenciador = 0;
do {
  var opcao = parseInt(
    prompt(
      "Dinheiro disponível: " + quantia + "\n1. Adicionar\n2.Retirar\n3.Sair"
    )
  );
  switch (opcao) {
    case 1:
      gerenciador = parseInt(prompt("Quanto adicionar?"));
      quantia += gerenciador;
      break;
    case 2:
      gerenciador = parseInt(prompt("Quanto retirar?"));
      if (gerenciador > quantia) {
        alert("Não há essa quantia para retirar");
        break;
      }
      quantia -= gerenciador;
      break;
    case 3:
      alert("Saindo");
      break;
  }
} while (opcao !== 3);
