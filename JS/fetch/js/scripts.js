//fetch pegando dados do usuário

function fetchGithubUser(username){
    //requisição
    fetch(`https://api.github.com/users/${username}`) 
        .then((response) => {
            if(!response.ok) {
    // console.log("Usuário não encontrado")
                console.error(error)
            }
            return response.json()
        })
    //tratamento da informação puxada
        .then((user) => {
            console.log("user", user) 
            createUserCard(user)
        })
    //erro
        .catch((error) => {
            console.error(error)
            const app = document.getElementById("app")
            app.innerHTML = `<p style='color:red>Erro: ${error.message}</p>`
        })
        
}

//função para criar o card de usuário
function createUserCard(user) {
    //criação
    const app = document.getElementById("app")

    const card = document.createElement("div")
    card.className = "card"

    const avatar = document.createElement("img")
    avatar.src = user.avatar_url
    avatar.alt = `${user.login}'s avatar`

    const name = document.createElement("h2")
    name.textContent = user.name

    const login = document.createElement("p")
    login.textContent = `@${user.login}`

    const bio = document.createElement("p")
    bio.textContent = user.bio

     card.appendChild(avatar)
     card.appendChild(name)
     card.appendChild(bio)
     card.appendChild(login)

     app.appendChild(card)
}

fetchGithubUser("thiagowali")