const hechos=[
    { padre: 'Juan', hijo: 'Luis' },
    { padre: 'Juan', hijo: 'Pedro' },
    { padre: 'Abraham', hijo: 'Juan'} 
]
//Abran es padre de juan
const espadre = familiar => familiar.padre === "Abraham"
const hijo = familiar => familiar.hijo === "Juan"

const pdrhijo = familiar =>
    espadre(familiar) && hijo(familiar);

const sonfamilia = hechos.some(pdrhijo);
console.log('¿Abraham es padre de Juan?',sonfamilia);



//quien es el padre de luis
const esHijo = familiar => familiar.hijo === "Luis";

const obtenerP = hechos.find(esHijo);

console.log("¿Quién es el padre de Luis?", obtenerP.padre);

//quienes son los hijos de juan
const esPadre = familiar => familiar.padre === "Juan";

const hijosDeJuan = hechos.filter(esPadre);

const nombresHijos = hijosDeJuan.map(
    familiar => familiar.hijo
);

console.log("Hijos de Juan:", nombresHijos);

//Dos personas son hermanos si tienen el mismo padre y son personas diferentes. 
const esHijo1 = familiar => familiar.hijo === "Luis";
const esHijo2 = familiar => familiar.hijo === "Pedro";

const padre1 = hechos.find(esHijo1);
const padre2 = hechos.find(esHijo2);

const sonHermanos = padre1.padre === padre2.padre &&
                    padre1.hijo !== padre2.hijo;

console.log("¿Luis y Pedro son hermanos?", sonHermanos);

//A es abuelo de C, Si A es padre de B y B es padre de C. 
const esNieto = familiar => familiar.hijo === "Luis";

const padreDelNieto = hechos.find(esNieto);

const esHijoDelAbuelo = familiar =>
    familiar.padre === "Abraham" &&
    familiar.hijo === padreDelNieto.padre;

const abuelo = hechos.some(esHijoDelAbuelo);

console.log("¿Abraham es abuelo de Luis?", abuelo);