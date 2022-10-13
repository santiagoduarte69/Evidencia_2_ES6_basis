const axios = require('axios');

const endpoint = "https://pokeapi.co/api/v2/type"
let config = {
    method: 'get',
    url: endpoint
}
axios(config).then((response)=>{
                    const tipos = response.data.results
                    tipos.forEach(element =>{
                        console.log(`Tipo de pokemon: ${element.name}`)
                        console.log(`Url: ${element.url}`)
                    })
                    
                })
            .catch((error)=>{
                    console.log(Error(`error: ${error}`))
                })