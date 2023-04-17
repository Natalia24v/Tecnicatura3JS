// let autos = new Array("Ferrari", "Renault", "BMW"); old school
const autos = ["Ferrari", "Renault", "BMW"];
console.log(autos);

// Recorremos los elementos de un arreglos
console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i< autos.length; i++){
    console.log(i + " : " + autos[i]);
}

// Modificamos los elementos del arreglo
autos[1] = 'Volvo';
console.log(autos[1]);

// Agregamos nuevos valores al arreglo
autos.push('Audi'); //se agrega al final
console.log(autos);

// Otras formas de agregar elementos al arreglo
autos[autos.length] = 'Porche';

// Tercer forma de agregar elementos teniendo CUIDADO, deja espacios vacios que consumen memoria quitando eficiencia
autos[6] = 'Renault';
console.log(autos);

// como preguntar es un Array o arreglo
console.log(Array.isArray(autos)); // Devuelve un boolean

console.log(autos instanceof Array); //Preguntamos si la variable es una instancia de la clase array
