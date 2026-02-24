//Projeto: Calculadora (JavaScript)
//Arquivo: main.js 
//Objetivo: praticar funções e execução com Node.js (sem loops complexos).

//1) Crie as funções básicas:
function somar(a,b) {
 return a + b;
}

function subtrair(a,b) {
 return a - b;
}

function multiplicar(a,b) {
 return a * b;
}
 
function dividir(a,b) {
 return a / b;
}
let x = 10;
let y = 2;

console.log("=== CALCULADORA BÁSICA ===");
console.log("Valores:", x, "e",y);

console.log("Soma;", somar(x, y));
console.log("Subtração:", subtrair(x, y));
console.log("Multiplicação:", multiplicar(x, y));
console.log("Divisão:", dividir(x, y));
