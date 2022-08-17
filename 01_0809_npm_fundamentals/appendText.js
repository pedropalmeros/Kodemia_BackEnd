const fs = require("fs"); 

fs.appendFile("text1.txt","\nThis is new","utf8", (err)=>{
    if(err){
        console.log("err",err); 
        return;
    }
    console.log("Archivo actualizado con éxito")
})