let minhaVariavelGlobal = "Eu sou uma variável global" //variável global

function minhaFuncao() {
    console.log(minhaVariavelGlobal)
}

// function escopo() {
//     let minhaVariavelLocal = "Eu sou uma variável Local" //variável local
//     console.log(minhaVariavelLocal)
// }

if(true) {
    let minhaVariavelLocal = "variável local"
    console.log(minhaVariavelLocal) //variável local
}