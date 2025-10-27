// let frutas = ["banana", "maçã", "mamão"]

// for(let fruta of frutas){
//     console.log(fruta)
// }

let pessoa = {nome:"João", idade:30, sexo:"masculino"}

for(let key in pessoa) {
    console.log(`${key}:${pessoa[key]}`)
}