const valores = [2,3,6,9]

const products = [
    {nome: "cadeira", preco: 200},
    {nome: "mesa", preco: 250},
    {nome: "porta", preco: 300}
]

const somaTotalDosValores = valores.reduce((acc, val) => acc + val, 0)

const somaTotalDosProdutos = products.reduce((acc, val) => acc + val.preco, 0)

console.log(somaTotalDosValores)

console.log(somaTotalDosProdutos)