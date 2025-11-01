//seleção por ID

const content = document.getElementById("content") //seleção por ID

console.log("content", content)

content.innerHTML = "<p> Parágrafo de texto</p>"
content.style.backgroundColor = "#00f"
content.style.fontSize = "30px"
content.style.color = "#fff"

// REMOVE

content.remove

// Seleção por classe

const classText = document.getElementsByClassName("text")

console.log("classText", classText)

for(text of classText) {
    text.style.color = "#0ff"
}

// Seleção por Tag

const titles = document.getElementsByTagName("h2")

console.log("titles", titles)

for(title of titles) {
    title.style.fontSize = "30px"
}

// Query Selector

const elementFeature = document.querySelector("#feature")

console.log("elementFeature", elementFeature)

const newElement = document.createElement("p")

newElement.textContent = "Um novo parágrafo"

elementFeature.append(newElement)
 
elementFeature.insertAdjacentHTML("beforeend", "<p>Outro parágrafo criado dinâmicamente</p>")

elementFeature.insertAdjacentHTML("beforebegin", `
    <div>
      <p>Outro parágrafo criado dinâmicamente usando template string</p>
    </div>`)

document.body.insertBefore(newElement, elementFeature)

// Query Selector ALL

const links = document.querySelectorAll("#links a")

console.log("links", links)

for(link of links) {
    link.classList.add("feature-links")
    console.log(link.getAttribute("href"))
    link.target = "_blank"
    link.title = link.getAttribute("href").slice(0,-5)
}

