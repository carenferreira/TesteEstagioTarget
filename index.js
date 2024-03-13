const prompt = require("prompt-sync")();

indice = 13;
soma = 0;
k = 0;

while (k < indice) {
  k += 1;
  soma += k;
}

console.log(`Questão 1 - O valor de soma é ${soma}`);

/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor 
sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a 
sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.*/
console.log("Questão 2 - ");
function verificaNumFibonacci(num) {
  let a = 0,
    b = 1;
  while (b < num) {
    let seq = b;
    b = a + b;
    a = seq;
  }
  if (b === num) {
    return `${num} pertence à sequência de Fibonacci.`;
  } else {
    return `${num} não pertence à sequência de Fibonacci.`;
  }
}

/*Informado pelo usuário
let num = prompt("Informe um número: ");
num = Number(num);*/
let num = 13;
console.log(verificaNumFibonacci(num));

//3) Descubra a lógica e complete o próximo elemento:
console.log("Questão 3 - ");
console.log("a)");
for (let i = 1; i < 10; i += 2) {
  console.log(i);
}

console.log("b)");
for (let i = 1; i < 130; i *= 2) {
  console.log(i);
}

console.log("c)");
for (let i = 0; i <= 7; i++) {
  const quadrado = i * i;
  console.log(quadrado);
}

console.log("d) ");
for (let i = 1; i <= 5; i++) {
  const quadrado = i * i * 4;
  console.log(quadrado);
}

console.log("e)");
let a = 0,
  b = 1,
  c = 13;
while (b < c) {
  let seq = b;
  b = a + b;
  a = seq;
  console.log(seq);
}

/*4)Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. 
Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser.
Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas 
idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?*/

/**
 * Acenderia o interruptor X por 10 minutos, acenderia o Y passado esse tempo e iria a uma das salas,
 * se a lâmpada estivesse quente, seria o interruptor X, se estivesse fria o Y, se estivesse apagada o Z.
 * Repetiria o processo em uma segunda sala fazendo com que restasse apenas uma opção para a terceira.
 */

//5) Escreva um programa que inverta os caracteres de um string.
const stringOriginal = "Target Sistemas";
console.log("Questão 5 - String Original:" + stringOriginal);
function inverte(str) {
  let invertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i];
  }
  return invertida;
}

const stringInvertida = inverte(stringOriginal);
console.log(`String invertida: ${stringInvertida}`);
