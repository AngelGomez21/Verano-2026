const datos=[
    { nombre: 'Luis', historialLimpio: true, ingresosEstables: true },
    { nombre: 'María', historialLimpio: true, ingresosEstables: false },
    { nombre: 'Jorge', historialLimpio: false, ingresosEstables: true } 
]

//El banco ofrece una tarjeta de crédito "Black" de alta seguridad.
const Hlimpio = cliente => cliente.historialLimpio === true
const Iestables = cliente => cliente.ingresosEstables === true

const bueno = cliente =>
    Hlimpio(cliente) && Iestables(cliente)
const aprobado = datos.filter(bueno);
console.log(aprobado);

//El banco quiere lanzar un programa de reactivación financiera y apoyo. 
const Historial = cliente => cliente.historialLimpio === false 
const Ingresos = cliente => cliente.ingresosEstables === false

const inestable = cliente =>
    Historial(cliente) || Ingresos(cliente)
const reactivacion = datos.filter(inestable);
console.log(reactivacion);

//El departamento de cobranza e inversiones quiere identificar
// clientes de riesgo medio para un producto de reestructuración.
const HistorialInestable = cliente => cliente.historialLimpio === false 
const IngresosEstables = cliente => cliente.ingresosEstables === true

const candidato = cliente =>
    HistorialInestable(cliente) && IngresosEstables(cliente)
const reestructuracion = datos.filter(candidato);
console.log(reestructuracion);

//Auditoría interna quiere saber si la sucursal está en riesgo operativo. 
const HistorialCritico = cliente => cliente.historialLimpio === false
const IngresosCriticos = cliente => cliente.ingresosEstables === false

const clientecritico = cliente =>
    HistorialCritico(cliente) && IngresosCriticos(cliente)
const critico = datos.some(clientecritico);
console.log('El cliente critico es',critico);

//Para que el banco reciba una certificación internacional de calidad de cartera,
// se requiere que todos los clientes cumplan con no ser un perfil fraudulento. 
const HistorialExcelente= cliente => cliente.historialLimpio === true
const IngresosExcelente = cliente => cliente.ingresosEstables === true

const clienteDesgtacado = cliente =>
    HistorialExcelente(cliente) && IngresosExcelente(cliente)
const Destacado = datos.every(clienteDesgtacado);
console.log('¿resibe el certificado?',Destacado);
