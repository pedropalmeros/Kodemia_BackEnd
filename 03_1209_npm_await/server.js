// HTTP
const http = require("http");

// 1.- se crea un servidor HTTP
// 2.- Poner a ese servidor a escuchar
const server = http.createServer((request,response)=>{
    // Leer el request
    //console.log("request", request);
    //console.log("url", request.url);

    const {url, method} = request;


/*

    if(method === "GET" && url === "/"){
        response.write("Bienvenido estás en el GET, en home estás LEYENDO");
    } else if(method === "POST" && url === "/"){
        response.write("Bienvenido estás en el POST, en la ruta /, estás CREANDO ");
    } else if(method === "PATCH" && url === "/"){
        response.write("Bienvenido estás en el PATCH, en la ruta /, estás MODIFICANDO ");
    } else if(method === "PUT" && url === "/"){
        response.write("Bienvenido estás en el PUT, en la ruta /, estás SOBRESCRIBIENDO ");
    } else if(method === "GET" && url === "/profile"){
        response.write("Bienvenido estás en el GET/PROFILE, en la ruta /profile, estás LEYENDO PROFILE ");
    } else {
        response.write("Esta ruta no existe")
    }
*/

const endpoints = {
    "GET": {
        "/profile": "Bienvenido estás en el GET - PROFILE",
        "/": "Bienvenido estaás en GET - HOME"
        },
    "POST": {
        "/": "Bienvenido estaás en POST - HOME"
        },
    "PUT": {
        "/": "Bienvenido estaás en PUT - HOME"
        },
    "PATCH": {
        "/": "Bienvenido estaás en PATCH - HOME"
        },
    "DELETE": {
        "/": "Bienvenido estaás en DELETE - HOME"
        },
}
    console.log(endpoints[method][url]);
    response.end();

    // GET -> localhost:8080
    // Bienvenido estás en el get, estás leyendo


    // POST -> localhost:8080;
    // Bienvenido estás creando 
})

// 2 parámetros
//     1.- Puerto
//     2.- callback -> lo que se va a hacer cuando se está escuchando
server.listen(8080,()=>{
    console.log("Server listening .....")
})