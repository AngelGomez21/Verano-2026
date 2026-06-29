//Combinar programacion Lazy con funcional
//Definir los predicados atomicos
/*const esPar=n=>n%2===0;
const multiploCinco=n=>n%5===0;
//Definimos la funcion
function* filtrarNumeros(iterables,predicado ){
    for(let dato of iterables){
        if(predicado(dato)){
            yield dato;
        }
    }
}

function* generarNumeros(){
    let i=0;
    while (true) yield i++;
}

//Generar los numeros atraves de una variable
const numerosAleatorios=generarNumeros();
const generarPares=filtrarNumeros
(numerosAleatorios, esPar)
console.log("Primer numero par: ",generarPares.next().value);
console.log("Primer numero par: ",generarPares.next().value);
console.log("Primer numero par: ",generarPares.next().value);
console.log("Primer numero par: ",generarPares.next().value);
console.log("Primer numero par: ",generarPares.next().value);

const numerosAleatorios2 = generarNumeros();

const generarMultiplosCinco = filtrarNumeros(
    numerosAleatorios2,
    multiploCinco
);

console.log("Primer numero Multiplo de 5: ",generarMultiplosCinco.next().value);
console.log("Primer numero Multiplo de 5: ",generarMultiplosCinco.next().value);
console.log("Primer numero Multiplo de 5: ",generarMultiplosCinco.next().value);
console.log("Primer numero Multiplo de 5: ",generarMultiplosCinco.next().value);Tanque
console.log("Primer numero Multiplo de 5: ",generarMultiplosCinco.next().value);*/

const llenadoTanque=Object.freeze([
    "01-Magna",
    "02-Premium",
    "03-Magna",
    "04-Premium",
    "05-Premium"
])
//Definir la regla o predicado
const esPrimum=id=>id.includes("Premium");
//Definir la funcion
function* filtrarTipo(iterable,predicado){
    for(let gasolina of iterable){
        console.log("analiza el arrreglo:", gasolina);
        if(predicado(gasolina)){
            yield gasolina;
        }
    }
}
//Definir la consulta
const bombadeCarga=filtrarTipo(llenadoTanque,esPrimum);
//Mostrar en pantalla
const premium=bombadeCarga.next().value
console.log("Tipo gas:",premium);