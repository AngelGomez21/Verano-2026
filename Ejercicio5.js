const Datos=[
    { id: 1, tipo: 'deposito', monto: 10000 },
    { id: 2, tipo: 'retiro', monto: 6000 },
    { id: 3, tipo: 'retiro', monto: 1500 },
    { id: 4, tipo: 'retiro', monto: 8000 }
]

//1.	Filtrar solo las transacciones que sean de tipo "retiro" y superen los $5,000.
const retiro = transaccion => transaccion.tipo === "retiro"
const supere = transaccion => transaccion.monto > 5000

const filtro = transaccion =>
    retiro(transaccion) && supere(transaccion);

const transacciones = Datos.filter(filtro);
console.log(transacciones);

//2.	Aplicarles una tarifa/multa de penalización del 5% por movimiento de alto riesgo.
const retiro2 = transaccion => transaccion.tipo === "retiro"
const supere2 = transaccion => transaccion.monto > 5000

const filtro2 = transaccion =>
    retiro2(transaccion) && supere2(transaccion);

const transacciones2 = Datos.filter(filtro2);
const penalizadas = transacciones2.map(transaccion => ({
    ...transaccion,
    multa: transaccion.monto * 0.05
}));
console.log(penalizadas);
//3.	Calcular el monto total de dinero penalizado que el banco recaudará.
const retiro3 = transaccion => transaccion.tipo === "retiro"
const supere3 = transaccion => transaccion.monto > 5000

const filtro3 = transaccion =>
    retiro3(transaccion) && supere3(transaccion);

const transacciones3 = Datos.filter(filtro3);
const penalizadas2 = transacciones3.map(transaccion => ({
    ...transaccion,
    multa: transaccion.monto * 0.05
}));

const totalMultas = penalizadas2.reduce(
    (acumulador, transaccion) => acumulador + transaccion.multa,
    0
);

console.log(penalizadas2);
console.log("Total de multas:", totalMultas);