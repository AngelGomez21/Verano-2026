const paquetes = [
  { tracking: 'ZA1', estado: 'Tabasco', peso: 20 },
  { tracking: 'ZA2', estado: 'Veracruz', peso: 18 },
  { tracking: 'ZA3', estado: 'Chiapas', peso: 5 },
  { tracking: 'ZA4', estado: 'Yucatán', peso: 25 },
  { tracking: 'ZA5', estado: 'Tabasco', peso: 10 },
  { tracking: 'ZA6', estado: 'Oaxaca', peso: 30 }
];

//inmutabilidad
function deepFreeze(obj){
    if(obj === null || typeof obj !== 'object' || Object.isFrozen(obj)){
        return obj;
    }
    const props = Object.getOwnPropertyNames(obj);

    for(let p of props){
        const child = obj[p];
        if(child && typeof child === 'object'){
            deepFreeze(child);
        }
    }
    return Object.freeze(obj);
}
const paquetesInmutables = deepFreeze(paquetes);

//Predicados atomicos
const esDestinoLocal = p => p.estado === "Tabasco";
const esPesado = p => p.peso >= 15;

//regla de negocio
const envioPrioritarioLocal = p =>
    !esDestinoLocal(p) && esPesado(p);

//evaluacion perezosa
function* filtroEnviosLazy(lista, predicado){
    for(let p of lista){
        if(predicado(p)){
            yield p;
        }
    }
}

//Flujo lazy
const flujoEnvios = filtroEnviosLazy(paquetesInmutables, envioPrioritarioLocal);
//consumo 2 paquetes
const envio1 = flujoEnvios.next().value;
const envio2 = flujoEnvios.next().value;

console.log("Paquetes (inmutables):");
console.log(paquetesInmutables);

console.log("Envío prioritario 1:");
console.log(envio1);

console.log("Envío prioritario 2:");
console.log(envio2);