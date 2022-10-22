const request = require('request');
const url = "https://rickandmortyapi.com/api/character"

let r = request(url, {json: true}, function(error, response, body){
    const tipos = response.body.results
    tipos.forEach(element => {
        console.log(`Nombre: ${element.name}`)
        console.log(`Estado: ${element.status}`)
        console.log(`Genero: ${element.male}`)
        console.log("---------------------------")
})
})

