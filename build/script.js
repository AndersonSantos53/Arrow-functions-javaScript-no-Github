var imc = function (peso, altura) {
    return peso / (Math.pow(altura, 2));
};
var peso = Number(prompt("Digite o peso: "));
var altura = Number(prompt("Digite sua altura: "));
var resultadoIMC = imc(peso, altura);
console.log("Seu IMC \u00E9: ".concat(resultadoIMC));
