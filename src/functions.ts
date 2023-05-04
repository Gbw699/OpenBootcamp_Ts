import { log } from "console";

//Funciones 
function saludar(nombre: string) {
    console.log(`hola ${nombre}`);
}
saludar("Juan")

function despedir(nombre: string = "Pedro") {
    console.log(`chau ${nombre}`);
}
despedir()

function despedirOpcional(nombre?: string) {
    if (nombre) {
        console.log(`chau ${nombre}`);
    } else {
        console.log(`chau`);
    }
}
despedirOpcional()
despedirOpcional("Ana")

function ejemploTipo(a: string | number) {
    typeof (a) === "string" && console.log(`${a} es un string`);
    typeof (a) === "number" && console.log(`${a} es un number`);
}
ejemploTipo("hola")
ejemploTipo(5)

function ejemploReturn(nombre: string, apellido: string): string {
    return `${nombre} ${apellido}`
}
console.log(ejemploReturn("Juan Carlos", "Villareal"));

//Funciones asíncronas
async function asyncFunction(): Promise<string> {
    await console.log("Tarea a completar antes de seguir con la secuencia de intrucciones");
    console.log("Tarea completada");
    return "Completado"
}
asyncFunction().then((response) => console.log(response))

//Funciones generadoras
function* ejemploGeneradora() {
    let index = 0
    while (index < 5) {
        yield index++
    }
}
let generadora = ejemploGeneradora()

console.log(generadora.next().value);
console.log(generadora.next());
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
