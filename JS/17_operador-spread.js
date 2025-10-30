//copiar um array

const numeros = [1,2,3,4]

const copia = [...numeros]

// console.log(copia)

//concatenar arrays

const numeros2 = [5,6,7,8,9]

const arraysConcatenados = [...numeros, ...numeros2]

console.log(arraysConcatenados)

// adicionando elementos no array

const novoArray = [10, ...arraysConcatenados, 30]

console.log(novoArray)

// objetos

const users ={nome: "thiago", idade: 20}

const copiaObjeto = {...users}

console.log(copiaObjeto)

const usersAtualizado = {...users, idade: 30, cidade: "fortaleza"}

console.log(usersAtualizado)