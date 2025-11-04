const inputForm = document.querySelector("#busca")

const botaoBusca = document.querySelector("#botaoBusca")

const resultadoDiv = document.querySelector("#resultado")

inputForm.addEventListener("keydown", (e) => {
    console.log(e.key)
})

inputForm.addEventListener("focus", (e) => {
    inputForm.style.backgroundColor = "#f0f"
})

inputForm.addEventListener("blur", (e) => {
    inputForm.style.backgroundColor = "#ff0"
})

function searchResult() {
    const valorBusca = inputForm.value.trim()
    if(valorBusca) {
        resultadoDiv.textContent = `Você buscou: ${valorBusca}`
    } else {
        resultadoDiv.textContent = "Por favor, insira algo na busca"
    }
}

botaoBusca.addEventListener("click", (e) => {
    searchResult()
})