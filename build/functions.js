"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//Funciones 
function saludar(nombre) {
    console.log(`hola ${nombre}`);
}
saludar("Juan");
function despedir(nombre = "Pedro") {
    console.log(`chau ${nombre}`);
}
despedir();
function despedirOpcional(nombre) {
    if (nombre) {
        console.log(`chau ${nombre}`);
    }
    else {
        console.log(`chau`);
    }
}
despedirOpcional();
despedirOpcional("Ana");
function ejemploTipo(a) {
    typeof (a) === "string" && console.log(`${a} es un string`);
    typeof (a) === "number" && console.log(`${a} es un number`);
}
ejemploTipo("hola");
ejemploTipo(5);
function ejemploReturn(nombre, apellido) {
    return `${nombre} ${apellido}`;
}
console.log(ejemploReturn("Juan Carlos", "Villareal"));
//Funciones asíncronas
function asyncFunction() {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("Tarea a completar antes de seguir con la secuencia de intrucciones");
        console.log("Tarea completada");
        return "Completado";
    });
}
asyncFunction().then((response) => console.log(response));
//Funciones generadoras
function* ejemploGeneradora() {
    let index = 0;
    while (index < 5) {
        yield index++;
    }
}
let generadora = ejemploGeneradora();
console.log(generadora.next().value);
console.log(generadora.next());
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
