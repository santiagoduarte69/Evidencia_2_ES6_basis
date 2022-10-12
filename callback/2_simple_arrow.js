const xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest

const url = "https://pokeapi.co/api/v2/type"
//funcion para conectar a una api en modo asincrono
const get_data = (endpoint, exito, fallo)=>{
    //1. Crear objeto xmlhttp
    const h = new xmlHttpRequest()
    //2. Abrir una conexion a la API
    h.open('GET', endpoint)
    //3. Enviar la request a serve(API)
    h.send()
    //4. Tratamiento de datos de la response
    h.onload = ()=>{
        if(h.status === 200){
            exito(h.responseText)
        } else {
            fallo(h.status)
        }
    }
}

//funcion callback: exito
const exito = (response)=>{
    const tipos = JSON.parse(response).results;
    tipos.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log('----------------------')
    });
}

//funcion callback: fallo
const fallo = (status)=>{
    console.log(status);
}


//invocar la funcion
get_data(url, exito, fallo)