const nome = prompt("Digite o nome do 1º veículo: ");
const velocidade = prompt("Digite a velocidade do 1º carro: ");

const nome2 = prompt("Digite o nome do 2º veículo: ");
const velocidade2 = prompt("Digite a velocidade do 2º carro: ");

if (velocidade > velocidade2) {
  alert("Veículo 1 foi mais rápido");
} else if (velocidade2 > velocidade) {
  alert("Veículo 2 foi mais rápido");
} else {
  alert("Os dois veículos estão na mesma velocidade");
}

const nome_atacante = prompt("Digite o nome do 1º personagem: ");
const ataque = parseInt(prompt("Digite o poder de ataque: "));

const nome_defensor = prompt("Digite o nome do 2º personagem: ");
const pontos_de_vida = parseInt(prompt("Digite os pontos de vida: "));
const poder_de_defesa = parseInt(prompt("Digite o poder de defesa"));
const escudo = prompt("Possui escudo?");
var dano = 0;

if (ataque > poder_de_defesa && escudo == "não") {
  dano = ataque - poder_de_defesa;
} else if (ataque > poder_de_defesa && escudo == "sim") {
  dano = (ataque - poder_de_defesa) / 2;
} else if (ataque <= poder_de_defesa) {
  dano = 0;
}
alert(
  "Atacante " +
    nome_atacante +
    "\nPoder de ataque: " +
    ataque +
    "\nDefensor: " +
    nome_defensor +
    "\nPontos de vida: " +
    (pontos_de_vida - dano) +
    "\nPoder de defesa: " +
    poder_de_defesa +
    "\nPossui escudo: " +
    escudo +
    "Dano: " +
    dano
);
