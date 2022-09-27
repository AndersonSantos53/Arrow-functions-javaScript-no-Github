const imc = (peso: number, altura: number) => { return peso / (Math.pow(altura, 2));
}

const peso = Number(prompt(`Digite o peso (EX: 70.5): `));

const altura = Number(prompt(`Digite sua altura (EX: 1.71): `));

const resultadoIMC = imc(peso, altura)
console.log(`Seu IMC é: ${resultadoIMC}`)
