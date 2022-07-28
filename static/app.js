fetch("/game").then(res => res.json()).then(game => {
    console.log(game)
    document.write(JSON.stringify(game))
})