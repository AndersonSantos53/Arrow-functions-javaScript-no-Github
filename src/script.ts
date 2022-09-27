const imc = (peso: number, altura: number) => { return peso / (Math.pow(altura, 2));
}

const peso = Number(prompt(`Digite o peso: `));

const altura = Number(prompt(`Digite sua altura: `));

const resultadoIMC = imc(peso, altura)
console.log(`Seu IMC é: ${resultadoIMC}`)