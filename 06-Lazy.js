//Obtener turnos
let contador=1;
function obtenerTurno(){
    const turno=`Turno ${contador}`;
    contador++;
    return turno;
}

console.log(obtenerTurno());
console.log(obtenerTurno());

function* obtenerTurnoY(){
    let contador=1;
    while(true){
        yield`Turno ${contador}`;
        contador++;
    }
}

const cajero=obtenerTurnoY();
console.log(cajero.next().value);
console.log(cajero.next().value);
console.log(cajero.next().value);

//Procesador de palabras
function procesadorPalabra(frase){
    const palabras=frase.split(" ")
    const resultado=[];
    for(let palabra of palabras){
        console.log(`Procesado completo: ${palabra}`);
        resultado.push(palabra.toUpperCase());
    } 
    return resultado;
}
const palabrasEscritas=procesadorPalabra("Programacion con JS");
console.log("Resultado: ",palabrasEscritas[0]);

function* procesarDatos(frase){
    const palabras=frase.split("");
    
    for(let palabra of palabras){
        console.log(`procesado de datos ${palabra}`);
        yield palabra.toUpperCase()
        
    }
}

const textoleido = procesaDatos("Programacion con JS")
console.log("Solo da lectura a la primera");
console.log("Resultado",textoleido.next().value);
console.log("Solo da lectura a la segunda");
console.log("Resultado",textoleido.next().value);