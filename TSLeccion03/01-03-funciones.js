miFuncion(8, 2); // A esto se le conoce como Hoating

function miFuncion(a, b){
    //console.log(("Sumamos: "+(a+b)))   
    return a + b;
}

// LLamamos la funcion 
miFuncion(5, 4);

let resultado = miFuncion(6, 7);
console.log(resultado);

//Declaramos una función de tipo expresión o anónima
let x = function(a, b){return a + b}; // necvesita cierre con punto y coma(;)
resultado = x(5, 6); // al llamarla se pone la variable y parentesis
console.log(resultado);

//Funciones de tipo self e invoking
(function(a, b){
    console.log('Ejecutando la funcion: '+ (a +b));

})(9, 6);// se llama a sí misma

console.log(typeof miFuncion);
function miFuncionDos(a, b){
   console.log(arguments.length); // se usa solo dentro de la función
}


miFuncionDos(5, 7);

//toString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto);

//Funciones flecha
const sumarFuncuinFlecha = (a, b) => a + b;
resultado = sumarFuncuinFlecha(3, 7); // Asignamos el valor a una variable
console.log(resultado);

let sumar = function(a = 4, b = 8){
    console.log(arguments[0]);// muesrtra el parámetro de: a
    console.log(arguments[1]);// muesrtra el parámetro de: b
    return a + b + arguments[2];
}
resultado = sumar(3,2,9);//en JS no es requerido que coincida el número de argumentos con el numero de parámetros
console.log(resultado);


//sumar todos los argumentos
let respuesta = sumarTodo(5, 4, 13, 10, 9);
console.log(respuesta);
function sumarTodo(){
    let suma =0;
    for (let i = 0; i < arguments.length; i++){
        suma+= arguments[i];// arguments es para arreglos
    }
    return suma;
}

//tipos primitivos 
let k = 10;// variable global, no cambia solo pasa su valor
function cambiarValor(a){// pase por valor
    a = 20;
}

cambiarValor(k);
console.log(k); // sigue valiendo lo mismo

//paso por referencia
const persona = {
    nombre: 'Juan',
    apellido: 'Lepez'
}

console.log(persona);
function cambiarValorObjeto(p1){
    p1.nombre = 'Ignacio';
    p1.apellido = 'Perez';
}

cambiarValorObjeto(persona);
console.log(persona);
