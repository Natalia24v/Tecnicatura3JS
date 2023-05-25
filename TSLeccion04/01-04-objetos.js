let x = 10; // variable de tipo primitivo
console.log(x.length);
console.log('Tipo primitivo')

//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 28,
    idioma: 'Es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();// Convierte las minusculas a mayusculas
    },
    nombreCompleto: function(){ //método o función en JS
        return this.nombre +' '+ this.apellido;
    },
    get nombreEdad(){ // este es el método get
        return this.nombre+' edad: '+this.edad;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto');

let persona2 = new Object(); // Debe crear un objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '54926182821';

console.log(persona2.telefono);
console.log('Creamos un nuevo objeto');
console.log(persona['apellido']);// accedemos como si fuera un arreglo
console.log('Usamos el ciclo For In');
//for in y accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
console.log('Cambiamos y eliminamos un error');
persona.apellida = 'Betancud'; //cambiamos dinamicamente un valor del objeto
delete persona.apellida;
console.log(persona);

//Distintas formas de imprimir un objeto
//Numero 1: la más sencilla concatenar cada valor de ccada propiedad
console.log('Distintas formas de imprimir un objeto: forma 1');
console.log(persona.nombre+', '+persona.apellido);

//Número2: a través del ciclo For In
console.log('Distintas formas de imprimir un objeto: forma 2');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Numero 3: la función objects.value()
console.log('Distintas formas de imprimir un objeto: forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

//Número4: utilizaremos el método JSON.stringify
console.log('Distintas formas de imprimir un objeto: forma 4');
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log('Comenzamos a utilizar el método get');
console.log(persona.nombreEdad);

console.log('Comenzamos con el método Get y Set para idiomas');
persona.lang = 'en';
console.log(persona.lang);

function Persona3(nombre, apellido, email){//constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email  = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido
    }
}

let padre = new Persona3('Leo', 'Lopez', 'lopezl@gmail.com'); 
padre.nombre = 'Luis'; // modificamos el nombre
padre.telefono = '5492618383832'
console.log(padre);
console.log(padre.nombreCompleto()); //utilizamos la funcion 

let madre = new Persona3('Laura', 'Contrera', 'contreral@gmail.com');
console.log(madre);
console.log(madre.telefono); //la propiedad no está definida
console.log(madre.nombreCompleto());

//diferentes formas de crear objetos
//caso Objeto1
let miObjeto = new Object();
//caso Objeto 2
let miObjeto2 = {};

//caso string 1
let miCadena1 = new String('Hola');//sintaxis formal
// Caso strin 2
let miCadena2 ='Hola'; // Sintaxis simplificada y recomendada

//caso con números
let miNumero = new Number(1); //Es formal no recomendada
//caso con números 2
let miNumero2 =1; //Sintaxis recomendad

//caso boolean1
let miBoolean1 = new Boolean(false); //Formal
//caso boolean2
let miBoolean2 =false; //Sintaxis recomendada

//caso con arreglos1
let miArreglo = new(Array);//Forma 1
//caso con arreglo 2
let miArreglo2 =[]; // Sintaxis recomendada

//caso con funcion 1
let miFuncion1 = new function(){}; //todo despues de new es considerado un objeto
//caso con funcion 2
let miFuncion2 = function(){}; // Notación simplificada y recomendada

//Uso de prototype
Persona3.prototype.telefono = '2618383832';
console.log(padre);
console.log(madre.telefono);
madre.telefono = '5432618383832';
console.log(madre.telefono);

//Uso de call
let persona4 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto2: function(titlo, telefono){
        return  titulo+': '+this.nombre+' '+this.apellido+' '+telefono;
        //return this.nombre+' '+this.apellido;
    }
}

let persona5 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

console.log(persona4.nombreCompleto2('Lic.', '5492618383834')); // call solo necesita los argumentos directamente
console.log(persona4.nombreCompleto2.call(persona5, 'Ing.', '5492618585856'));

// Matodo Apply
let arreglo = ['Ing.', '5492618686865']; //Apply lee el arreglo, necesita un arreglo con los argumentos necesarios
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));

