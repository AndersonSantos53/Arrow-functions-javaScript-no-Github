var imc = function (peso, altura) {
    return peso / (Math.pow(altura, 2));
};
var peso = Number(prompt("Digite o peso (EX: 70.5): "));
var altura = Number(prompt("Digite sua altura (EX: 1.71): "));
var resultadoIMC = imc(peso, altura);
console.log("Seu IMC \u00E9: ".concat(resultadoIMC));
