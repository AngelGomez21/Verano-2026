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
function obtenerP(NHijo) {
    const relacion = hechos.find(
        dato => dato.hijo === NHijo
    );

    return relacion.padre;
}

console.log("¿Quien es el padre de Luis?",obtenerP("Luis"));

//quienes son los hijos de juan
function hijos(nombreP) {

    const relaciones = hechos.filter(
        dato => dato.padre === nombreP
    );

    return relaciones.map(
        relacion => relacion.hijo
    );
}

console.log("Hijos de Juan:", hijos("Juan"));

//Dos personas son hermanos si tienen el mismo padre y son personas diferentes. 
function sonH(persona1, persona2) {

    const padre1 = hechos.find(
        dato => dato.hijo === persona1
    );

    const padre2 = hechos.find(
        dato => dato.hijo === persona2
    );

    return padre1.padre === padre2.padre &&
           persona1 !== persona2;
}
console.log(
    sonH("Luis","Pedro")
);

//A es abuelo de C, Si A es padre de B y B es padre de C. 
function esAbuelo(abuelo, nieto) {

    const padreDelNieto = hechos.find(
        dato => dato.hijo === nieto
    );

    if (!padreDelNieto) {
        return false;
    }

    return hechos.some(
        dato =>
            dato.padre === abuelo &&
            dato.hijo === padreDelNieto.padre
    );
}
console.log(
    esAbuelo("Abraham","Luis")
);