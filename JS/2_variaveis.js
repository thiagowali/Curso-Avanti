var name = "Thiago"
var name = "Pedro" 
// VAR permite que 2 variaveis possuam o mesmo nome, e isso pode ser um problema, o de baixo substituirá o primeiro mas ambos ainda existem 

let nome = "VINICIUS" 
nome = 300
// LET não permite a repetição e variáveis, mas permite que elas sejam alteradas depois sem o uso do LET 

const nomes = "flamengo" 
// CONST não permite repetição e nem mudanças na variavel

const idade = 40 
const valor1 = 2.10 
const valor2 = 2.90 
//dado do tipo NUMBER e flutuante

const isLogin = true
const noLogin = false
//tipo de dano BOLEANO/BOOLEAN

console.log("var= " + name)

console.log("let= " + nome)

console.log("const= " + nomes)

console.log(nome + " " + nomes) //concatenação ou relacionamento, usa o + para juntar ou calcular duas variáveis dentro do log
console.log("uso de template string: " + `meu nome ${nome} ${nomes}`) //template string

console.log("minha idade é: " + idade)
console.log("a somar do " + valor1 + " mais o " + valor2 + " é igual a ", valor1 + valor2)

//--------------------------------------------------------------------------//

const frutas = ["banana", "maçã", "goiaba"] 
const numero = [10, 50, 20]
//estrutura de array

console.log("frutas dentro do array: ", frutas)
console.log("indice 0 dentro do array: ", frutas[0]) //acessando o índice do array

const usuario = {
    nome1: "Thiago",
    sobrenome: "silva",
    idade: 25,
}
 //estrutura de objeto

console.log(usuario) 
console.log(usuario.idade) //retorna apenas a variável desejada depois do ponto .

const vazio = null //retorna um valor vazio
console.log (vazio)

console.log(typeof name) //retorna o tipo que aquela variável é (object, number, string)