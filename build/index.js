"use strict";
//esto es un comentario con de una línea
/*esto es un comentario multilinea*/
console.log("hola estoy utilizando ts");
//Declaración de variables: 
const nombre = "Jose";
const edad = 34;
const algo = "un string";
const error = false;
// Instanciación multiple de variables 
let a, b, c;
a = "Juan";
b = true;
c = 5.4;
//Tipos más complejos
const name = ["uno", 3, "dos"];
//Enumerados
var Estados;
(function (Estados) {
    Estados[Estados["completado"] = 1] = "completado";
    Estados[Estados["incompleto"] = 2] = "incompleto";
    Estados[Estados["pendiente"] = 3] = "pendiente";
})(Estados || (Estados = {}));
const estadoTarea = Estados.incompleto;
const tarea1 = {
    nombre: "Pedrito",
    estado: Estados.pendiente
};
const producto1 = {
    nombre: "carne",
    precio: 3500
};
