// function bomDia(name) {
//     console.log("bom dia!") 
//     return `bom Dia ${name}!`
// }

// const greetings = bomDia()

// console.log("Saudação", greetings)

// console.log(bomDia("Thiago"))

// const bomDia = (name) => { arrow function
//     return  `bom dia ${name}`
// }

// console.log(bomDia("Thiago"))

const adicao = (x,y) => x+y;
const subtracao = (x,y) => x-y;
const multiplicacao = (x,y) => x*y;
const divisao = (x,y) => x/y;

console.log(`resultado:${adicao(5,6)}`)


    //mais arrow function exemplos
    // No parameters
    const greet = () => console.log('Hello!');

    // One parameter
    const double = num => num * 2;

    // Multiple parameters with implicit return
    const add = (a, b) => a + b;

    // Multiple statements with explicit return
    const calculateSum = (a, b) => {
      let sum = a + b;
      return sum;
    };