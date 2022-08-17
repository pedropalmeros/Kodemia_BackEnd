/**
 * 1 - Pedir informes
 * 2 - Entrevista
 * 3 - Pagar (becado)
 * 4 - Inscripcion
 */

/**
 * 1 - Con callbacks
 */
/*
 const koder = {
    seDieronInformes: false,
    seEntrevisto: false,
    sePago: false,
    seInscribio: false,
};

const darInformes = (koderADarInformes, callback) => {
    let error = null;
    setTimeout(() => {
        // Voy a darle informes al koder
        koderADarInformes.seDieronInformes = true;

        // Si el koder no fue informado, lanzar un error
        if (!koderADarInformes.seDieronInformes) {
            error = "No ha sido informado";
        }
        callback(error, koderADarInformes);
    }, 3000);
};

const entrevistar = (koderAEntrevistar, callback) => {
    let error = null;
    setTimeout(() => {
        koderAEntrevistar.seEntrevisto = true;

        if (!koderAEntrevistar.seEntrevisto) {
            error = "No se pudo entrevistar";
        }

        callback(error, koderAEntrevistar);
    }, 2000);
};

const pagar = (koderAPagar, callback) => {
    let error = null;
    setTimeout(() => {
        koderAPagar.sePago = false;

        if (!koderAPagar.sePago) {
            error = "No se ha pagado";
        }

        callback(error, koderAPagar);
    }, 5000);
};

const inscribir = (koderAInscribir, callback) => {
   let error = null;

   setTimeout(() => {
       koderAInscribir.seInscribio = true

       if(!koderAInscribir.seInscribio) {
           error = "No se pudo inscribir"
       }

       callback(error, koderAInscribir)

   }, 1000)
};
*/
/**
 * Asincronidad -> cuando se hacian varias cosas al mismo tiempo
 */
/*

darInformes({ ...koder }, (error, koderConInformes) => {
    if (error) {
        console.log("error:", error);
        return; // Salte
    }

    // Es cuando ya me hizo todo
    // Aqui se espero, el koder ya tiene informes
    entrevistar({ ...koderConInformes }, (error, koderEntrevistado) => {
        if (error) {
            console.log("error", error);
            return;
        }

        // Vamos a pagar
        pagar({ ...koderEntrevistado }, (error, koderPagado) => {
            if (error) {
                console.log("error", error);
                return;
            }

            // Inscribirlo
            inscribir({...koderPagado}, (error, koderInscrito) => {
                if(error) {
                    console.log("error", error)
                    return
                }

                console.log("Exito", koderInscrito)
            })
        });
    });
});
*/

/***
 * Pastel
 * 1 - Leer la receta
 * 2 - Conseguir los ingredientes
 * 3 - Preparacion de la masa
 * 4 - Hornear el pastel
 * 5 - Decorar el paster
 */

/*

const koder = {
    seDieronInformes: false,
    seEntrevisto: false,
    sePago: false,
    seInsciribio: false;
}

const darInformes = (koderADarInformes)=>{
    koderADarInformes.seDieronInformes = true;
}


const pagar = (koderAPagar) =>{
    koderAPagar.sePago = true;
    return koderAPagar;
}


const inscribir = (koderAInscribir) => {
    koderAInscribir.seInscribio = true; 
    return koderAInscribir;
}

const koderInformado = darInformes({...koder});
const koderEntrevistado = entrevistar({...koderInformado});
const koderPagado = pagar({...koderEntrevistado});
const koderInscrito = inscribir({...koderPagado});



*/


const pastel ={
    recetaLeida : false,
    ingredientesConseguidos: false,
    masaPreparada: false,
    pastelHorneado: false,
    pastelDecorado: false
};


const leerReceta = (pastelObj, callback)=>{
    let error = null;
    setTimeout(()=>{
        // se tiene que leer la receta
        pastelObj.recetaLeida = true;

        // 
        if(!pastelObj.recetaLeida){
            error = "La receta no se ha leido";
        }
        callback(error);
    },2000);
}; 

const conseguirIngredientes = (pastelObj, callback)=>{
    let error = null;
    setTimeout(()=>{
        // se tiene que leer la receta
        pastelObj.ingredientesConseguidos = true;

        // 
        if(!pastelObj.ingredientesConseguidos){
            error = "No se han conseguido los ingredientes";
        }
        callback(error);
    },2000);
}; 

const prepararMasa = (pastelObj, callback)=>{
    let error = null;
    setTimeout(()=>{
        // se tiene que leer la receta
        pastelObj.masaPreparada = true;

        // 
        if(!pastelObj.masaPreparada){
            error = "La masa no se ha preparado";
        }
        callback(error);
    },2000);
}; 

const hornearPastel = (pastelObj, callback)=>{
    let error = null;
    setTimeout(()=>{
        // se tiene que leer la receta
        pastelObj.pastelHorneado = true;

        // 
        if(!pastelObj.pastelHorneado){
            error = "No se ha horneado el pastel";
        }
        callback(error);
    },2000);
}; 

const decorarPastel = (pastelObj, callback)=>{
    let error = null;
    setTimeout(()=>{
        // se tiene que leer la receta
        pastelObj.pastelDecorado = true;

        // 
        if(!pastelObj.pastelDecorado){
            error = "No se ha horneado el pastel";
        }
        callback(error,);
    },2000);
}; 

leerReceta({...pastel},(error)=>{
    if(error){// SI HA FALLADO LEER RECETA
        console.log("error:",error);
        return;
    }

    // SI LEER RECETA OK
    console.log("leer receta -> OK");
    conseguirIngredientes(pastel,(error)=>{

        // SI FALLA  CONSEGUIR INGREDIENTES
        if(error){
            console.log("error: ",error);
            return;
        }

        // SI CONSEGUIR INGREDIENTES -> OK
        console.log("conseguir ingredientes -> OK");
        prepararMasa(pastel,(error)=>{

            // SI FALLA PREPARAR MASA
            if(error){
                console.log("error: ",error);
                return;
            }

            // SI PREPARAR MASA -> OK
            console.log("preparar masa -> OK");
            hornearPastel(pastel,(error)=>{

                // SI FALLA HORNEAR PASTEL
                if(error){
                    console.log("error: ",error);
                    return;
                }

                // SI PREPARAR HORNEAR PASTEL -> OK
                console.log("hornear pastel -> OK");
                decorarPastel(pastel,(error)=>{

                    // SI FALLA HORNEAR PASTEL
                    if(error){
                        console.log("error: ",error);
                        return;
                    }

                    console.log("Decorando pastel -> OK")
                    console.log('A COMER PASTEL');
                })
            })
        })
    })
});