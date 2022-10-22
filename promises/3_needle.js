const needle = require('needle');
const endpoint = "https://anapioficeandfire.com/api/characters"

needle('get', endpoint)
    .then((response)=>{
        return response.body.results
    })
    .then((tipos)=>{
        tipos.forEach((element)=>{
            console.log(element.name)
            console.log('----------')  
        })
    })
    .catch((error)=>{
        console.log(error)
    })