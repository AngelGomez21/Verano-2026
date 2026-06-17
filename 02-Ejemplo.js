//Reglas
const cursosDesarrollo=curso=>curso.categoria==="Desarrollo";
const certificadoTrue=cursos=>curso.tieneCertificado===true;
//combinaciones
const desarrolloAndCertificado=curso=>
    cursoDesarrollo(curso) && certificadoTrue(curso);
//consultas
const resultado=cursos.filter(desarrolloAndCertificado);
console.log("El resultado de los cursos con desarrollo y certificado son:",
    resultado,map
);
