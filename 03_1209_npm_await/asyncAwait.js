

/***
 * Pastel
 * 1 - Leer la receta
 * 2 - Conseguir los ingredientes
 * 3 - Preparacion de la masa
 * 4 - Hornear el pastel
 * 5 - Decorar el pastel
 */

const koder = {
    seDieronInformes: false,
    seEntrevisto: false,
    sePago: false,
    seInscribio: false,
};

const darInformes = (koderAInformar)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            koderAInformar.seDieronInformes = true;

            if(!koderAInformar.seDieronInformes){
                reject("No se pudo dar informes");
            }

            //Si se resuelve
            console.log("Se pudo dar informes");
            resolve(koderAInformar);
        },3000);
    });
};

const entrevistar = (koderAEntrevistar) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            koderAEntrevistar.seEntrevisto = true;
            if(!koderAEntrevistar.seEntrevisto){
                reject("No se pudo entrevistar");
            }

            // Si se resuelve
            console.log("Se pudo entrevistar")
            resolve(koderAEntrevistar);
        },3000);
    })
};


const pagar = (koderAPagar) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            koderAPagar.sePago = true;

            if(!koderAPagar.sePago){
                reject("No se pudo pagar");
            }

            // Si se resuelve
            console.log("Si se pudo pagar");
            resolve(koderAPagar);
        },3000);
    })
}

const inscribir = (koderAInscribir)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            koderAInscribir.seInscribio = true;

            if(!koderAInscribir.seInscribio){
                reject("No se pudo inscribir");
            }

            // si se resuelve
            console.log("Si se pudo Inscribir");
            resolve(koderAInscribir);
        },3000)
    });
}

// Async - Await
const procesoKoderKodemia = async () => {
    try{
        const koderInformado = await darInformes({...koder});
        const koderEntrevistado = await entrevistar({...koderInformado});
        const koderPagado = await pagar({...koderEntrevistado});
        const koderInscrito = await inscribir({...koderPagado});
        console.log("koderInscrito adentro de función", koderInscrito);

        return koderInscrito;
    }catch(err){
        console.log("err", err)
    }
}

procesoKoderKodemia()
    .then((koderInscrito)=>{
        console.log("Koder Inscrito en el retorno en el then", koderInscrito)
    })
    .catch((err)=>{
        console.log("Paso un error",err);
    })