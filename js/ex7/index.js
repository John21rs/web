var fila = [];
do {
  var pacientes = "";
  for (var i = 0; i < fila.length; i++) {
    pacientes += i + 1 + ". " + fila[i] + "\n";
  }
  var opcao = prompt(
    "Pacientes: " +
      pacientes +
      "\n1. Novo Paciente\n2.Consultar Paciente\n3.Sair"
  );
  switch (opcao) {
    case "1":
      var nome = prompt("Digite o nome do paciente: ");
      fila.push(nome);
      break;
    case "2":
      if (fila.length === 0) {
        alert("Não há nenhum paciente");
        break;
      }
      var nome_removido = fila.shift();
      alert(nome_removido);
      break;
    case "3":
      alert("Saindo");
      break;
  }
} while (opcao !== "3");

var baralho = [];
do {
  var cartas = "";
  for (var i = 0; i < baralho.length; i++) {
    cartas += i + 1 + ". " + baralho[i] + "\n";
  }
  var opcao = prompt(
    "Cartas: " + cartas + "\n1. Adicionar uma carta\n2.Puxar uma carta\n3.Sair"
  );
  switch (opcao) {
    case "1":
      var nome = prompt("Digite o nome da carta: ");
      baralho.unshift(nome);
      break;
    case "2":
      if (baralho.length === 0) {
        alert("Não há nenhuma carta");
        break;
      }
      var nome_removido = baralho.shift();
      alert(nome_removido);
      break;
    case "3":
      alert("Saindo");
      break;
  }
} while (opcao !== "3");
