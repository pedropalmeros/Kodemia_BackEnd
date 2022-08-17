/** crear una función que reciba un nombre del proceso
 * y esa misma función imprimirla con color arcoiris
 * Utilizando el paquete de colors
 */

/////////////////////////////////////
// import colors from "colors" //ES6 -> SE UTILIZA MÁS React -> uitliza transpilador 
// const colors: require("colors");  CommandJS

const colors = require("colors");
const  printRainbow = (string) => {
    console.log(string.rainbow);
}
printRainbow(process.argv[2]);