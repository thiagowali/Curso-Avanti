const valores = [2,3,6,9]

const users = [
    {nome: "thiago", idade: 20},
    {nome: "pedro", idade: 25},
    {nome: "carlos", idade: 30}
]

const valoresDobrados = valores.map(valor => valor * 2)

const userNames = users.map(user => user.nome)

console.log(valoresDobrados)

console.log(valores)

console.log(userNames)