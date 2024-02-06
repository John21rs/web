var nome = prompt("Nome: ");
var visita = prompt("Visitou alguma cidade? ");
var cidades = "";
var contador = 0;
while (visita === "sim") {
  cidades += prompt("Nome da cidade: ") + "\n";
  contador++;
  visita = prompt("Visitou alguma cidade? ");
}

alert("Nome: " + nome + "\nCidades: " + cidades + "\nQuantidade: " + contador);
