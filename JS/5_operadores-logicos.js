const idade = 20
const genero = "M"

// && - E
// || - Ou
// ! - not (não)

const resultado1 = idade >= 18 && genero === "M"
const resultado2 = idade >= 18 && genero === "F"
const resultado3 = idade >= 18 || genero === "M"
const resultado4 = idade >= 18 || genero === "F"
const resultado5 = idade >= 21 || genero === "F"

console.log(`Você atende aos requisitos de idade ${idade} e de genero ${genero}? ${resultado1}`)
console.log(`Você atende aos requisitos de idade ${idade} e de genero ${genero}? ${resultado2}`)
console.log(`Você atende aos requisitos de idade ${idade} e de genero ${genero}? ${resultado3}`)
console.log(`Você atende aos requisitos de idade ${idade} e de genero ${genero}? ${resultado4}`)
console.log(`Você atende aos requisitos de idade ${idade} e de genero ${genero}? ${resultado5}`)
console.log(`Você atende aos requisitos de idade ${idade} e de genero ${genero}? ${!resultado5}`) //inversão de resultado com ! (not)