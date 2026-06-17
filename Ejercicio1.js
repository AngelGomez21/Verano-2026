const cursos=[
    { titulo: 'React Avanzado', categoria: 'Desarrollo', esGratis: false, tieneCertificado: true },
    { titulo: 'Introducción a UX/UI', categoria: 'Diseño', esGratis: true, tieneCertificado: false },
    { titulo: 'Node.js y MongoDB', categoria: 'Desarrollo', esGratis: true, tieneCertificado: true },
    { titulo: 'Figma para Principiantes', categoria: 'Diseño', esGratis: false, tieneCertificado: false} 
]
//categoria desarrollo con certificado

const desarrollo = curso => curso.categoria === "Desarrollo"
const certificado = curso => curso.tieneCertificado === true

const eseladecuado = curso => 
    desarrollo(curso) && certificado(curso);

const busca = cursos.filter(eseladecuado);
console.log(busca);


//gratis o que pertenezca a la categoria diseño
const gratis = curso => curso.esGratis === true
const categoria = curso => curso.categoria === "Diseño"

const loquebusca = curso =>
    gratis(curso) || categoria(curso);

const quiere = cursos.filter(loquebusca);
console.log(quiere);


//lista de cursos sin certificado
const certificado2 = curso => curso.tieneCertificado === false

const sinC = curso =>
    certificado2(curso);

const no = cursos.filter(sinC);
console.log(no);

//Cursos de desarrollo gratis o con certificado
const desarrollo2 = curso => curso.categoria === "Desarrollo"
const gratis2 = curso => curso.esGratis === true
const certificado3 = curso => curso.tieneCertificado === true

const cursoDGC = curso =>
    desarrollo2(curso) && gratis(curso) || certificado3(curso);

const si = cursos.filter(cursoDGC);
console.log(si);

