//Generador de ID unicos para la base de datos
//Implementacion con lazy evaluation

function* generarIds(){
    for (let i = 1; i <= 100; i++){
        console.log(`Generando ID: TEC-2026-${i}`);
        yield `TEC-2026-${i}`;
    }
}

//Crear el generador
const idsGenerados = generarIds();

console.log("Solo da lectura al primer ID");
console.log("Resultado:", idsGenerados.next().value);

console.log("Solo da lectura al segundo ID");
console.log("Resultado:", idsGenerados.next().value);

console.log("Solo da lectura al tercer ID");
console.log("Resultado:", idsGenerados.next().value);

console.log("Solo da lectura al cuarto ID");
console.log("Resultado:", idsGenerados.next().value);

console.log("Solo da lectura al quinto ID");
console.log("Resultado:", idsGenerados.next().value);

//Base de datos simulada
const dbPosts = [
    "Post 1",
    "Post 2",
    "Post 3",
    "Post 4",
    "Post 5",
    "Post 6"
];

//Generador que carga los posts de 3 en 3
function* obtenerFeed(posts){
    for (let i = 0; i < posts.length; i += 3){
        console.log("->Cargando siguiente bloque de posts");
        yield posts
        .slice(i, i + 3)
        .map(post => `<html>${post}<htlm>`);
    }
}

//Crear el generador
const feed = obtenerFeed(dbPosts);

console.log("Primer scroll");
console.log(feed.next().value);

console.log("Segundo scroll");
console.log(feed.next().value);

console.log("Tercer scroll");
console.log(feed.next().value);

//logs del servidor
const logsServidor = [
    "200 OK",
    "200 OK",
    "500 ERROR",
    "200 OK",
    "500 ERROR",
    "404 NOT FOUND"
];

//Generador que busca errores criticos de forma perezosa
function* buscarErrores(logs){
    for (let log of logs){
        if (log.includes("500")){
            console.log(`Error encontrado: ${log}`);
            yield log;
        }
    }
}
//crear el generador
const errores = buscarErrores(logsServidor);

console.log("Buscar primer error");
console.log("Resultado:", errores.next().value);

console.log("Buscar segundo error");
console.log("Resultado:", errores.next().value);

console.log("Buscar tercer error");
console.log("Resultado:", errores.next().value);

//Generador de la serie de Fibomacci

function* serieFibonacci(){
    let a = 0;
    let b = 1;

    while (true){
        yield a;

        let siguiente = a + b;
        a=b;
        b=siguiente;
    }
}

const fibonacci = serieFibonacci();

console.log("Primer numero:");
console.log(fibonacci.next().value);

console.log("Segundo numero:");
console.log(fibonacci.next().value);

console.log("Tercer numero:");
console.log(fibonacci.next().value);

console.log("Cuarto numero:")
console.log(fibonacci.next().value);

console.log("Quinto numero:");
console.log(fibonacci.next().value);

console.log("Sexto número:");
console.log(fibonacci.next().value);

console.log("Séptimo número:");
console.log(fibonacci.next().value);

//Precios en el almacen 
const preciosAlmacen = [100, 200, 300, 400, 500];

//Generador que aplica IVA de forma perezosa
function* aplicarIva(precios){
    for(let precio of precios){
        console.log(`Procesando producto de $${precio}`);
        yield precio * 1.16;
        
    }
}
//Crear el generador
const productosConIva = aplicarIva(preciosAlmacen);

console.log("Primer producto cobrado");
console.log("Total:", productosConIva.next().value);

console.log("Segundo producto cobrado");
console.log("Total:", productosConIva.next().value);

console.log("Tercer producto cobrado");
console.log("Total:", productosConIva.next().value);

console.log("Cuarto producto cobrado");
console.log("Total:", productosConIva.next().value);

console.log("Quinto producto cobrado");
console.log("Total:", productosConIva.next().value);