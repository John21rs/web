const nome = prompt("Digite seu primeiro nome");
const sobrenome = prompt("Digite seu sobrenome");
const campo = prompt("Digite seu campo de estudo");
const ano = parseInt(prompt("Digite seu ano de nascimento"));

alert(
  "Nome: " +
    nome +
    "\nSobrenome: " +
    sobrenome +
    "\nCampo de estudo: " +
    campo +
    "\nIdade: " +
    (2023 - ano)
);

const number1 = parseInt(prompt("Digite o primeiro número: "));
const number2 = parseInt(prompt("Digite o segundo nome: "));

alert(
  "Soma: " +
    (number1 + number2) +
    "\nSubtração: " +
    (number1 - number2) +
    "\nMultiplicação: " +
    number1 * number2 +
    "\nDivisão: " +
    number1 / number2
);
