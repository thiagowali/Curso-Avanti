const valores = [2,3,6,9]

const users = [
    {nome: "thiago", idade: 20},
    {nome: "pedro", idade: 25},
    {nome: "carlos", idade: 30}
]

const numerosMaioresQue5 = valores.filter(num => num >= 5)

const numerosPares = valores.filter(num => num % 2 === 0)

const idadeMaiorQue20 = users.filter(user => user.idade > 21)

console.log(numerosMaioresQue5)

console.log(idadeMaiorQue20)

console.log(numerosPares)