const peticionesHttp = [
    { id: "REQ-01", metodo: "GET",  ipOrigen: "192.168.1.50", latenciaMs: 45,   tamanioPayloadKb: 2,    payload: "SELECT * FROM users" },
    { id: "REQ-02", metodo: "POST", ipOrigen: "185.220.10.1", latenciaMs: 2500, tamanioPayloadKb: 1500, payload: "DROP TABLE users;--" },
    { id: "REQ-03", metodo: "GET",  ipOrigen: "192.168.1.55", latenciaMs: 12,   tamanioPayloadKb: 1,    payload: "ping" },
    { id: "REQ-04", metodo: "POST", ipOrigen: "185.220.10.1", latenciaMs: 1800, tamanioPayloadKb: 950,  payload: "normal_profile_update" },
    { id: "REQ-05", metodo: "POST", ipOrigen: "192.168.1.70", latenciaMs: 3100, tamanioPayloadKb: 1200, payload: "upload_heavy_image" },
    { id: "REQ-06", metodo: "GET",  ipOrigen: "172.16.25.40", latenciaMs: 50,   tamanioPayloadKb: 500,  payload: "exec MaliciousScript" }
];

function deepFreeze(objeto){
    Object.freeze(objeto);

    Object.keys(objeto).forEach(
        clave => {
            if (
                objeto[clave] !== null &&
                typeof objeto[clave] === "object" &&
                !Object.isFrozen(objeto[clave])
            ){
                deepFreeze(objeto[clave]);
            }
        }
    );
    return objeto;
}
const peticionesProtegidas = deepFreeze(peticionesHttp);

console.log("¿Arreglo congelado?:", Object.isFrozen(peticionesProtegidas));
console.log("¿Primera peticion congelada?:", Object.isFrozen(peticionesProtegidas[0]))

const esMetodoEscritura = x => x.metodo === "POST"
const esLatenciaAlta = x => x.latenciaMs >= 2000
const esPayloadSospechoso = x => x.payload.includes("DROP") || x.payload.includes("SELECT") || x.payload.includes("MaliciousScript")

const AmenazaPotencial = x =>
    esMetodoEscritura(x) && (esLatenciaAlta(x) || esPayloadSospechoso(x))

const amenaza = peticionesProtegidas.filter(AmenazaPotencial);
console.log("Las amenazas son: ",amenaza);

function* analizadorSeguridadLazy(flujo, regla){
    for (const peticion of flujo){
        if (regla(peticion)){
            yield peticion;
        }
    }
}
const flujoAmenazas = 
    analizadorSeguridadLazy(
        peticionesProtegidas,
        AmenazaPotencial
    );

const amenazasCapturadas = [];

const amenaza1 = flujoAmenazas.next().value;
const amenaza2 = flujoAmenazas.next().value;

amenazasCapturadas.push(amenaza1);
amenazasCapturadas.push(amenaza2);

console.log(amenazasCapturadas);

const promedioPayload =
    amenazasCapturadas.reduce(
        (acumulador, amenaza) =>
            acumulador + amenaza.tamanioPayloadKb,
        0
    ) / amenazasCapturadas.length;

    console.log("promedio de payload:",
        promedioPayload,
        "KB"
    );

//EJERCICIO 2
const ordenesEnvio = [
    { id: "ORD-101", tipo: "estandar", destino: "Tabasco", pesoKg: 4,   distanciaKm: 8,   asegurado: false },
    { id: "ORD-102", tipo: "express",  destino: "Veracruz", pesoKg: 22,  distanciaKm: 120, asegurado: true },
    { id: "ORD-103", tipo: "estandar", destino: "Tabasco", pesoKg: 1.5, distanciaKm: 15,  asegurado: false },
    { id: "ORD-104", tipo: "express",  destino: "Tabasco", pesoKg: 5,   distanciaKm: 3,   asegurado: false },
    { id: "ORD-105", tipo: "express",  destino: "Yucatán",  pesoKg: 18,  distanciaKm: 250, asegurado: false },
    { id: "ORD-106", tipo: "express",  destino: "Chiapas",  pesoKg: 35,  distanciaKm: 190, asegurado: true }
];

function deepFreeze(objeto){
    Object.freeze(objeto);

    Object.keys(objeto).forEach(clave => {
        if (
            objeto[clave] !== null &&
            typeof objeto[clave] === "object" &&
            !Object.isFrozen(objeto[clave])
        ){
            deepFreeze(objeto[clave]);
        }
    });
    return objeto;
}

const ordenesProtegidas = deepFreeze(ordenesEnvio);
console.log("Ejercicio2:");

console.log("¿Arreglo congelado?:", Object.isFrozen(ordenesProtegidas));
console.log("¿Primera orden congelada?:", Object.isFrozen(ordenesProtegidas[0]));

const esEnvioExpress = m => m.tipo === "express"
const esPaquetePesado = m => m.pesoKg >= 15
const esRutaForanea = m => m.destino !== "Tabasco"

const despachoPrioritario = m =>
    esEnvioExpress(m) && (esPaquetePesado(m) || esRutaForanea(m))

const primercamion = ordenesProtegidas.filter(despachoPrioritario);
console.log("Los prioritarios son:", primercamion );

function* despachoOrdenesLazy (flujo, regla){
    for (const orden of flujo){
        if (regla(orden)){
            yield orden;
        }
    }
}

const flujoDespacho = 
    despachoOrdenesLazy(
        ordenesProtegidas,
        despachoPrioritario
    )

const orden1 = flujoDespacho.next().value;
const orden2 = flujoDespacho.next().value;

const ordenesCapturadas = [];

ordenesCapturadas.push(orden1);
ordenesCapturadas.push(orden2);

const promedioDistancia =
    ordenesCapturadas.reduce(
        (acumulador, orden) =>
            acumulador + orden.distanciaKm,
        0
    ) / ordenesCapturadas.length;

console.log("Órdenes capturadas:", ordenesCapturadas);
console.log("Promedio de distancia:", promedioDistancia);