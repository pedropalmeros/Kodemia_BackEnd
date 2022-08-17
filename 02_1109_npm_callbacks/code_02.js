/**
 *
 * Promesa -> El resultado de un proceso asincrono
 *
 * Reglas ->
 * Tienen 3 estados
 * 1 - Pending -> 5s, 5 segundos pendiente
 * 2 - Rejected -> si ocurrio un error -> si fuera rechaza
 * 3 - Accepted -> si se resolvio -> si fue aceptada
 *
 * Al momento de hacer la promesa, declaracion de la promesa
 * Las promesas se resuelven o se rechazan
 *    - Resolve -> Function que se ejecutan
 *    - Reject -> Function que se ejecutan
 *
 * Al momento de ejecutarlas
 * Recibir el rechazo o la respuesta resuelta
 * .then -> para recibir lo resuelto
 * .catch -> para recibir lo rechazado -> el error
 */

/*

 const koder = {
    seDieronInformes: false,
    seEntrevisto: false,
    sePago: false,
    seInscribio: false,
};

const darInformes = (koderAInformar) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            koderAInformar.seDieronInformes = true;

            if (!koderAInformar.seDieronInformes) {
                reject("No se pudo dar informes");
            }

            // Si se resuelve
            resolve(koderAInformar);
        }, 3000);
    });
};

const entrevistar = (koderAEntrevistar) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            koderAEntrevistar.seEntrevisto = true;

            if (!koderAEntrevistar.seEntrevisto) {
                reject("No se pudo entrevistar");
            }

            // Si se resuelve
            resolve(koderAEntrevistar);
        }, 3000);
    });
};

const pagar = (koderAPagar) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            koderAPagar.sePago = false;

            if (!koderAPagar.sePago) {
                reject("No se pudo pagar");
            }

            // Si se resuelve
            resolve(koderAPagar);
        }, 3000);
    });
};

const inscribir = (koderAInscribir) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            koderAInscribir.seInscribio = true;

            if (!koderAInscribir.seInscribio) {
                reject("No se pudo inscribir");
            }

            // Si se resuelve
            resolve(koderAInscribir);
        }, 3000);
    });
};

const koderInformado = darInformes({ ...koder });
koderInformado
    .then((koderInformado) => {
        console.log(koderInformado);

        // Entrevistar
        entrevistar({ ...koderInformado })
            .then((koderEntrevistado) => {
                console.log("koderEntrevistado", koderEntrevistado);

                pagar({ ...koderEntrevistado })
                    .then((koderPagado) => {
                        console.log("El koder fue pagado", koderPagado);

                        inscribir({ ...koderPagado })
                            .then((koderInscrito) => {
                                console.log("Exito", koderInscrito);
                            })
                            .catch((error) => {
                                console.log("error", error);
                            });
                    })
                    .catch((error) => {
                        console.log("Error", error);
                    });
            })
            .catch((error) => {
                console.log("error", error);
            });
    })
    .catch((error) => {
        console.log("error", error);
    });
    */

/***
 * Pastel
 * 1 - Leer la receta
 * 2 - Conseguir los ingredientes
 * 3 - Preparacion de la masa
 * 4 - Hornear el pastel
 * 5 - Decorar el pastel
 */

 const pastel ={
    recetaLeida : false,
    ingredientesConseguidos: false,
    masaPreparada: false,
    pastelHorneado: false,
    pastelDecorado: false
};


const leerReceta = (recetaALeer)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            recetaALeer.recetaLeida = true;

            if(!recetaALeer.recetaLeida){
                reject("No se pudo leer la receta");
            }

            //SI SE PUDO LEER LA RECETA; 
            resolve(recetaALeer);
        },3000);
    });
};

const conseguirIngredientes = (ingredienteXConseguir)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            ingredienteXConseguir.ingredientesConseguidos = true;

            if(!ingredienteXConseguir.ingredientesConseguidos){
                reject("No se pudo CONSEGUIR LOS INGRECIENTES");
            }

            //SI SE PUDO CONSEGUIR LOS INGREDIENTES; 
            resolve(ingredienteXConseguir);
        },3000);
    });
};


const prepararMasa = (masaAPreparar)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            masaAPreparar.masaPreparada = true;

            if(!masaAPreparar.masaPreparada){
                reject("No se pudo PREPARAR LA MASA");
            }

            //SI SE PUDO PREPARAR LA MASA
            resolve(masaAPreparar);
        },3000);
    });
};


const hornearPastel = (pastelAHornear)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            pastelAHornear.pastelHorneado = true;

            if(!pastelAHornear.pastelHorneado){
                reject("No se pudo HORNEAR EL PASTEL");
            }

            //SI SE PUDO HORNEAR EL PASTEL 
            resolve(pastelAHornear);
        },3000);
    });
};


const decorarPastel = (pastelADecorar)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            pastelADecorar.pastelDecorado = true;

            if(!pastelADecorar.pastelDecorado){
                reject("No se pudo DECORAR EL PASTEL ");
            }

            //SI SE PUDO DECORAR EL PASTEL 
            resolve(pastelADecorar);
        },3000);
    });
};

const pastelMoka = leerReceta({...pastel});
pastelMoka
    .then((pastelMoka)=>{
        console.log(pastelMoka);

        // CONSEGUIR INGREDIENTES
        conseguirIngredientes({...pastelMoka})
            .then((ingredientes)=>{
                console.log("Ingredientes Conseguidos", ingredientes)

                prepararMasa({...ingredientes})
                    .then((masaPrep)=>{
                        console.log("Masa preparada",masaPrep);

                        hornearPastel({...masaPrep})
                            .then((panHorneado)=>{
                                console.log("Pastel Horneado", panHorneado);

                                decorarPastel({...panHorneado})
                                    .then((panDecorado)=>{
                                        console.log("Exito",panDecorado);
                                    })
                                    .catch((error)=>{
                                        console.log("error",error);
                                    });
                            })
                            .catch((error)=>{
                                console.log("Error",error);
                            })
                    })
                    .catch((error)=>{
                        console.log("Error",error);
                    });
            })
            .catch((error)=>{
                console.log("Error",error);
            });
    })
    .catch((error)=>{
        console.log("Error",error);
    });