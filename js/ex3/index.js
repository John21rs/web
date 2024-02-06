var medida = parseInt(prompt("Quantos metros?"));
var escolha = parseInt(
  prompt("Opções:\n1 - mm\n2 - cm\n3 - dm\n4 - dam\n5 - hm\n6 - km ")
);

switch (escolha) {
  case 1:
    alert(medida * 1000 + "mm");
    break;
  case 2:
    alert(medida * 100 + "cm");
    break;
  case 3:
    alert(medida * 10 + "dm");
    break;
  case 4:
    alert(medida * 0.1 + "dam");
    break;
  case 5:
    alert(medida * 0.01 + "hm");
    break;
  case 6:
    alert(medida * 0.001 + "km");
    break;
  default:
    alert("Sem opção");
    break;
}
