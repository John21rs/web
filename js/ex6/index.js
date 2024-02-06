var numero = prompt("Digite um número: ");

var tab = "";
for (var i = 0; i <= 10; i++) {
  tab = i + "*" + numero + "=" + i * numero + "\n" + tab;
}

alert(tab);

var palavra = prompt("Digite uma palavra");

var palavra_invertida = palavra.split("").reverse().join("");

if (palavra === palavra_invertida) {
  alert("É um palíndromo");
} else {
  alert("Não é um palíndromo. " + palavra + "/" + palavra_invertida);
}
