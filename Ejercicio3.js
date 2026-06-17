const datos=[
    { nombre: 'Ana', edad: 25, rol: 'admin', activo: true },
    { nombre: 'Carlos', edad: 17, rol: 'user', activo: true },
    { nombre: 'Beto', edad: 30, rol: 'user', activo: false } 
]
//enviar corrreo
const cuentaDeshabilitada = usuario => usuario.activo === false;

const inactivos = datos.filter(cuentaDeshabilitada);

inactivos.forEach(usuario => {
    console.log(`Correo enviado a ${usuario.nombre}: Su cuenta está deshabilitada.`);
});

//ser mayor de edad y tener cuenta activa. 
const mayorDeEdad = usuario => usuario.edad >= 18;
const cuentaActiva = usuario => usuario.activo === true;

const puedeEntrar = usuario =>
    mayorDeEdad(usuario) && cuentaActiva(usuario);

const permitidos = datos.filter(puedeEntrar);

console.log(permitidos);

//admin y mayor de edad
const menorDeEdad = usuario => usuario.edad < 18;
const rolCuenta = usuario => usuario.rol === "admin";

const usuarioEspecial = usuario =>
    menorDeEdad(usuario) && rolCuenta(usuario);

const especial = datos.filter(usuarioEspecial);

console.log(`Cantidad de usuarios especiales: ${especial.length}`);

//la regla dicta que, el usuario debe estar activo (o debe ser administrador o mayor de edad). 

const activo = usuario => usuario.activo
const rol = usuario => usuario.rol === "admin"
const edad = usuario => usuario.edad >= 18

const editor = usuario =>
    activo(usuario) && rol(usuario) || edad(usuario);
const permitido = datos.filter(editor);
console.log(permitido);
