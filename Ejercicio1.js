const cursos=[
    { titulo: 'React Avanzado', categoria: 'Desarrollo', esGratis: false, tieneCertificado: true },
    { titulo: 'Introducción a UX/UI', categoria: 'Diseño', esGratis: true, tieneCertificado: false },
    { titulo: 'Node.js y MongoDB', categoria: 'Desarrollo', esGratis: true, tieneCertificado: true },
    { titulo: 'Figma para Principiantes', categoria: 'Diseño', esGratis: false, tieneCertificado: false} 
]
//categoria desarrollo con certificado
function obtenerCDC() {
    return cursos.filter(
        curso => curso.categoria === "Desarrollo" &&
                 curso.tieneCertificado === true
    );
}

console.log(obtenerCDC());

//gratis o que pertenezca a la categoria diseño
function obtenerCGD() {
    return cursos.filter(
        curso => curso.categoria === "Diseño" ||
                 curso.esGratis === true
    );
}

console.log(obtenerCGD());

//lista de cursos sin certificado
function obtenerCSC() {
    return cursos.filter(
        curso => curso.tieneCertificado === false
    );
}

console.log(obtenerCDC());

//Cursos de desarrollo gratis o con certificado
function obtenerCDGC() {
    return cursos.filter(
        curso =>
    curso.categoria === "Desarrollo" &&
    (
        curso.tieneCertificado === true ||
        curso.esGratis === true
    )
    );
}
console.log(obtenerCDGC());
