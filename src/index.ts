//esto es un comentario con de una línea
/*esto es un comentario multilinea*/

console.log("hola estoy utilizando ts");

//Declaración de variables: 
const nombre: string = "Jose";
const edad: number = 34;
const algo: any = "un string";
const error: boolean = false

// Instanciación multiple de variables 
let a:string,b:boolean,c:number
a="Juan"
b=true
c=5.4

//Tipos más complejos
const name: (string | number)[] = ["uno", 3, "dos"]

//Enumerados
enum Estados {
    "completado" = 1,
    "incompleto",
    "pendiente" 
}

const estadoTarea: Estados = Estados.incompleto

//Interfaces
interface Tarea {
    nombre: string,
    estado: Estados,
}

const tarea1: Tarea = {
    nombre: "Pedrito",
    estado: Estados.pendiente
}

//Tipos
type Producto = {
    precio: number,
    nombre: string
}

const producto1: Producto = {
    nombre: "carne",
    precio: 3500
}
