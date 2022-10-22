const xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest

const url = "https://anapioficeandfire.com/api/characters"

//funcion para conectar a una api en modo asincrono
const get_data = (endpoint)=>{
    //definir la promesa:
    let promise = new Promise((resolve, rejectPromise) => {
            //1. Crear objeto xmlhttp
            const h = new xmlHttpRequest()

            //2. Abrir una conexion a la API
            h.open('GET', endpoint)

            //3. Enviar la request a serve(API)
            h.send()

            //4. Tratamiento de datos de la response
            h.onload = ()=>{
                if(h.status === 200){
                    resolve(h.responseText)
                }
                else {
                    rejected(h.status)
                }
            }
    })
    return promise 
}

//funcion callback: exito
exito = (response)=>{
    const tipos = JSON.parse(response);
    tipos.forEach(element => {
        console.log(`Alias: ${element.aliases}`)
        console.log(`Genero: ${element.gender}`)
        console.log('----------------------')
    });
}

//funcion callback: fallo
const fallo = (status)=>{
    console.log(status);
}


//invocar la funcion
get_data(url).then((data)=>{
    exito(data)
}).catch((status)=>{
      fallo(status)
})