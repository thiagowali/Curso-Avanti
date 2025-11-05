fetch("https://api.github.com/users/thiagowali")
    .then(response => response.json())
    .then(data => console.log("dados", data))