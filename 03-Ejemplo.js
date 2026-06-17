//Freeze
const nombres={nombre:"dany",rol:"admin"};
nombres.rol="user";
console.log(nombres);

const nombres2=Object.freeze({nombre:"dany",rol:"admin"})
const nombresModificados={...nombres2, rol:"user",};
console.log(nombresModificados);

const calificaciones=Object.freeze([80,90,100,90]);
const sumaTota=calificaciones.reduce((a,valor)=>a+valor);
const promedio=sumaTotal/calificaciones.length
