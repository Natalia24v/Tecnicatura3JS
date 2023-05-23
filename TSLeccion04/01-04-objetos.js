let x = 10; // variable de tipo primitivo
console.log(x.length);
console.log('Tipo primitivo')

//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 30,
    nombreCompleto: function(){ //método o función en JS
        return this.nombre +' '+ this.apellido;
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
