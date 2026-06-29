const aspirantes = [
    { nombre: 'Luis',  examen: 90, entrevista: 80, estudioSocioeconomico: true },
    { nombre: 'Elena', examen: 70, entrevista: 90, estudioSocioeconomico: true },
    { nombre: 'Pedro', examen: 95, entrevista: 90, estudioSocioeconomico: false },
    { nombre: 'María', examen: 85, entrevista: 95, estudioSocioeconomico: true },
    { nombre: 'Iván',  examen: 90, entrevista: 90, estudioSocioeconomico: true }
];

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

const aspirantesInmutables = deepFreeze(aspirantes);

//Procesamiento lineal
const aspirantesConPuntaje = aspirantesInmutables.map(a => ({
    ...a,
    puntajeFinal: (a.examen * 0.70) + (a.entrevista * 0.30)
}))

//logica de predicados
const calificaParaBeca = e =>
    e.puntajeFinal >= 85 &&
    e.estudioSocioeconomico === true;

//evaluacion perezosa
function* becadosLazy(lista, predicado){
    for(let e of lista){
        if(predicado(e)){
            yield e;
        }
    }
}

//Crear flujo lazy
const flujoBecados = becadosLazy(aspirantesConPuntaje, calificaParaBeca);

const becado1 = flujoBecados.next().value;
const becado2 = flujoBecados.next().value;

const promedio =
    [becado1, becado2].reduce((acc, b) => acc + b.puntajeFinal, 0) / 2;

console.log("Aspirantes:");
console.log(aspirantesInmutables);

console.log("Aspirantes con puntaje final:");
console.log(aspirantesConPuntaje);

console.log("Becado 1:");
console.log(becado1);
console.log("Becado 2:");
console.log(becado2);

console.log("Promedio de becados:");
console.log(promedio);