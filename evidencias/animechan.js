const needle = require('needle');
const endpoint = "https://animechan.vercel.app/api/random"

const f = async () => {
    try{
       const response = await needle('get', endpoint)
       console.log('anime')
       console.log(response.body.anime)
       console.log('personaje')
       console.log(response.body.character)
       console.log('frase')
       console.log(response.body.quote)
    }
    catch(error){

    }
}

//funcion callback: exito
exito = (response)=>{
    const universidades = response;
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