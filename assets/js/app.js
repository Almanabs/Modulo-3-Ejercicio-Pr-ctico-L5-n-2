pacientes=parseInt(prompt("ingrese cantidad de pacientes:"));
let matriz=[];


for (i=0;i<pacientes;i++){ 
    paciente={}
    cantidad=i+1
    window.alert("paciente" +cantidad);
    nombre=prompt("ingrese nombre de pacientes:");
    edad=parseInt(prompt("ingrese edad de paciente:"));
    peso=parseInt(prompt("ingrese peso de paciente [kg]:"));
    sexo=prompt("ingrese sexo (h o m) de paciente");
    paciente["nombre"]=nombre;
    paciente["edad"]=edad;
    paciente["peso"]=peso;
    paciente["sexo"]=sexo;
    matriz.push(paciente);
}
 
suma=0
for (const elemento of matriz){
    suma+=elemento["peso"];
 } 

 const promedio=(suma, pacientes)=>suma/pacientes;
 const promedioPacientes=promedio(suma,pacientes);
 console.log("el promedio de los %d pacientes, es de %i kilogramos", pacientes, promedioPacientes);