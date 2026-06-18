const datos = [
  {
    id: 1,
    nombre: 'Autenticación',
    zona: 'us-east',
    consultasPorMinuto: 12000,
    activo: true,
    tecnologias: ['Node', 'Redis']
  },

  {
    id: 2,
    nombre: 'Procesamiento Pagos',
    zona: 'us-west',
    consultasPorMinuto: 4500,
    activo: true,
    tecnologias: ['Java', 'Spring']
  },

  {
    id: 3,
    nombre: 'Recomendaciones AI',
    zona: 'us-east',
    consultasPorMinuto: 25000,
    activo: false,
    tecnologias: ['Python', 'TensorFlow']
  },

  {
    id: 4,
    nombre: 'Notificaciones',
    zona: 'eu-central',
    consultasPorMinuto: 8500,
    activo: true,
    tecnologias: ['Node', 'RabbitMQ']
  },

  {
    id: 5,
    nombre: 'Reportes Históricos',
    zona: 'us-west',
    consultasPorMinuto: 500,
    activo: false,
    tecnologias: ['Python', 'MongoDB']
  }
];
//Ejercicio1
//Servio operativo
const operativo = servicio => servicio.activo === true

const esoperativo = servicio =>
    operativo(servicio);

const devuelve = datos.filter(esoperativo)
console.log('Regla A:',devuelve);

//Zona Us
const zona1 = servicio => servicio.zona === "us-east"
const zona2 = servicio => servicio.zona === "us-west"

const cumple = servicio =>
    zona1(servicio) || zona2(servicio);

const sicumple = datos.filter(cumple)
console.log('Regla B:',sicumple);

//Consultas por minuto
const ConMinuto = servicio => servicio.consultasPorMinuto >= 10000

const devuelve2 = servicio =>
    ConMinuto(servicio);

const sidevuelve = datos.filter(devuelve2)
console.log('Consultas que cumplen:',sidevuelve);

//Incluye node
const incluye = servicio => servicio.tecnologias.includes("Node");
const usanode = servicio => incluye(servicio);

const cumplenode = datos.filter(usanode)

console.log('Servicio que usa node:',cumplenode);

//Ejercicio2
//Requiere mantenimiento
const noactivo = servicio => servicio.activo === false
const Cminuto = servicio => servicio.consultasPorMinuto >= 10000

const mantenimiento = servicio =>
    noactivo(servicio) && Cminuto(servicio)

const ReMantenimiento = datos.filter(mantenimiento);

console.log('Los que requieren mantenimiento son:',ReMantenimiento);

//Servicio critico
const activo2 = servicio => servicio.activo === true
const zona4 = servicio => servicio.zona === 'us-east'
const zona3 = servicio => servicio.zona === 'us-west'
const altacarga = servicio => servicio.consultasPorMinuto >= 10000

const serviciocritico = servicio =>
    activo2(servicio) && (zona4(servicio) || zona3(servicio)) || altacarga(servicio)

const critico = datos.filter(serviciocritico);
console.log('Servicio critico',critico);

//ACloudflare
const zona5 = servicio => servicio.zona === 'us-east'
const zona6 = servicio => servicio.zona === 'us-west'
const incluye2 = servicio => servicio.tecnologias.includes("Node")
const Noaltacarga = servicio => servicio.consultasPorMinuto < 10000
const Zonaus = servicio => zona5(servicio) || zona6(servicio)

const migra = servicio =>
    Zonaus(servicio) && incluye2(servicio) && Noaltacarga(servicio)

const Simigra = datos.filter(migra);
console.log('Los que migran son:',Simigra);
//Ejercicio 3
// Filtrar y mapear
const activo7 = servicio => servicio.activo === true
const zona7 = servicio => servicio.zona === 'us-east'
const zona8 = servicio => servicio.zona === 'us-west'
const altacarga2 = servicio => servicio.consultasPorMinuto >= 10000

const serviciocritico2 = servicio =>
    activo7(servicio) && (zona7(servicio) || zona8(servicio)) || altacarga2(servicio)

const critico2 = datos.filter(serviciocritico2);
const nombres = critico2.map(servicio => servicio.nombre);
console.log('Servicio critico',nombres);

//requieren mantenimiento mapeado y filtrado
const noactivo2 = servicio => servicio.activo === false
const Cminuto2 = servicio => servicio.consultasPorMinuto >= 10000

const mantenimiento2 = servicio =>
    noactivo2(servicio) && Cminuto2(servicio)

const ReMantenimiento2 = datos.filter(mantenimiento2);
const nombre2 = ReMantenimiento2.map(servicio => servicio.nombre);
console.log('Los que requieren mantenimiento son:',nombre2);

//Total de consultas
const activo3 = servicio => servicio.activo === true
const activos = datos.filter(activo3);

const totalConsultas = activos.reduce(
    (acumulador, servicio) =>
        acumulador + servicio.consultasPorMinuto,
    0
);

console.log(
    'Total de consultas de los servicios activos:',
    totalConsultas
);