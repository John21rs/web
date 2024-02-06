function area(base, altura) {
  return base * altura;
}

function trapezio(base_maior, base_menor, altura) {
  return ((base_maior + base_menor) * altura) / 2;
}

function circulo(raio) {
  return 3.14 * raio * raio;
}

do {
  var opcao = prompt(
    "Escolha uma opção: \n1.Triângulo\n2.Retângulo/Quadrado\n3.Trapézio\n4.CírculoN5.Sair"
  );
  switch (opcao) {
    case "1":
      var base = parseInt(prompt("Digite a base: "));
      var altura = parseInt(prompt("Digite a altura"));
      alert(area(base, altura) / 2);
      break;
    case "2":
      var base = prompt("Digite a base: ");
      var altura = prompt("Digite a altura: ");
      alert(area(base, altura));
      break;
    case "3":
      var base_maior = parseInt(prompt("Digite a base maior: "));
      var base_menor = parseInt(prompt("Digite a base menor: "));
      var altura = parseInt(prompt("Digite a altura: "));
      alert(trapezio(base_maior, base_menor, altura));
      break;
    case "4":
      var raio = parseInt(prompt("Digite o raio: "));
      alert(circulo(raio));
      break;
    case "5":
      alert("Saindo...");
      break;
  }
} while (opcao !== "5");
