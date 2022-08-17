const fs = require("fs"); 
console.log("fs write",fs.write);


fs.writeFile("text1.txt","Archivo creado desde NODE","utf8", (err)=>{
    if(err){
        console.log("err",err); 
        return;
    }
    console.log("El archivo fue creado con exito")
})