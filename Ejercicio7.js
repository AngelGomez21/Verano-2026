const transacciones = [
    { id: 101, tipo: 'deposito', monto: 60000, pais: 'México' },
    { id: 102, tipo: 'retiro',   monto: 15000, pais: 'Colombia' }, 
    { id: 103, tipo: 'retiro',   monto: 12000, pais: 'México' },
    { id: 104, tipo: 'retiro',   monto: 55000, pais: 'México' },
    { id: 105, tipo: 'deposito', monto: 90000, pais: 'Francia' },
    { id: 106, tipo: 'retiro',   monto: 75000, pais: 'Espana' }
]; 

//Funcion para congelamiento profundo
function deepFreeze(obj){
    //Validar que sea un objeto
    if(obj === null || typeof obj !== 'object' || Object.isFrozen(obj)){
        return obj;
    }
    //Obtener todas las propiedades
    const propiedadesObjeto = Object.getOwnPropertyNames(obj)
    //Recorrer cada propiedad
    for(let nombre of propiedadesObjeto){
        const propiedadHijo = obj[nombre];
        //Aplicar recursividad
        if(propiedadHijo && typeof propiedadHijo === 'object'){
            deepFreeze(propiedadHijo);
        }
    }
    //Congelar el objeto actual
    return Object.freeze(obj);
}

//Aplicar congelamiento profundo
const transaccionesInmutables = deepFreeze(transacciones);

//Intentos de modificacion
transaccionesInmutables[0].monto = 100000;
transaccionesInmutables[1].pais = "Argentina";

/*transaccionesInmutables.push({
    id:107,
    tipo:'deposito',
    monto:20000,
    pais:'Mexico'
})*/

console.log(transaccionesInmutables);

//Retiro, sospechoso, zona de riesgo
const esRetiro = t => t.tipo === 'retiro';
const esMontoSospechoso = t => t.monto >= 50000;
const esZonaDeRiesgo = t => !(t.pais === 'Mexico');

console.log(esRetiro(transaccionesInmutables[0]));
console.log(esRetiro(transaccionesInmutables[1]));

console.log(esMontoSospechoso(transaccionesInmutables[3]));
console.log(esMontoSospechoso(transaccionesInmutables[2]));

console.log(esZonaDeRiesgo(transaccionesInmutables[5]));
console.log(esZonaDeRiesgo(transaccionesInmutables[3]));

//Son fraude
const esFraude = t =>
    esRetiro(t) && (esMontoSospechoso(t) || esZonaDeRiesgo(t))

transaccionesInmutables.forEach(t => {
    console.log(`ID: ${t.id} | Alerta fraude: ${esFraude(t)}`);
});

//Generador perezoso
function* filtrarFreudeLazy(transacciones, predicado){
    for (let t of transacciones){
        if(predicado(t)){
            yield t;
        }
    }
}
const flujoFraude = filtrarFreudeLazy(transaccionesInmutables, esFraude);

console.log("Primer fraude:");
console.log(flujoFraude.next().value);

console.log("Segundo fraude:");
console.log(flujoFraude.next().value);