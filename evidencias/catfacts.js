const needle = require('needle');
const endpoint = "https://cat-fact.herokuapp.com"

const f = async () => {
    try{
       const response = await needle('get', endpoint)
       response.body.forEach(cat =>{
                console.log(cat.text)
                console.log('-------------  ')
       })
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