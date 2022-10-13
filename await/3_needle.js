const needle = require('needle');
const endpoint = "https://pokeapi.co/api/v2/type"

const f = () => {
    try{
       const response = await needle('get', endpoint)
       exito(response.body)
    }
    catch(error){
       fallo(error)
    }
}

//funcion callback: exito
exito = (response)=>{
    const tipos = response.results;
    tipos.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log('----------------------')
    });
}

//funcion callback: fallo
const fallo = (status)=>{
    console.log(status);
}

f()