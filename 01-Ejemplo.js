const hechos=[
    {relacion:"es_humano", sujeto:"Juan"},
    {relacion:"es_humano", sujeto:"daniela"},
    {relacion:"estudiante", sujeto:"Mario"},
    {relacion:"estudiante", sujeto:"yesi"},
    {relacion:"perro", sujeto:"guapo"}
]
//Programacion imperativa
const nuevoArreglo=[];
for(let i=0;i<hechos.length;i++){
    if(hechos[i].relacion==="estudiante"){
        nuevoArreglo.push(hechos[i])
    }
}
console.log(nuevoArreglo)
//Programacion funcional
const datosEstudiantes=hechos.filter
(estudiante=>estudiante.relacion==="estudiante");
console.log(datosEstudiantes);
const datEstudiante=hechos.find
(est=>est.relacion==="estudiante");
console.log(datEstudiante);
const datEst=hechos.some
(es=>es.relacion==="estudiante")
console.log(datEst);
const nuevosDatos=hechos.map
(data=>data.relacion);
console.log(nuevosDatos);
//
function EsMortal(sujeto){
    const esHumano=hechos.some
    (humano=>humano.relacion==="es_humano" && 
        humano.sujeto===sujeto)
        return esHumano;
}
console.log(EsMortal("daniela"));
console.log(EsMortal("yesi"));
console.log(EsMortal("guapo"));


