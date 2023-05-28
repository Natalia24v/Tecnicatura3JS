//let persona3 = new Persona('Carla', 'Ponce'); Esto no se deb hacer. Persona is not defined

class Persona{ //siempre se debe definir primero ls clase, CLASE PADRE
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
    // Sobreecribiendo el método de la clase padre
    toString(){ //Regresa un string
        //Se aplica el polimorfismo que significa = multiples formas en tiempo de ejecucion
        // El método que se ejecuta depende si es una referencia de tipo padre o hija
        return this.nombreCompleto();
    }
}
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
     this._departamento = departamento;   
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    //sobreescritura
    nombreCompleto(){
        return super.nombreCompleto()+', '+this._departamento;
    }
}

let persona1 = new Persona('Martín', 'Perez');
console.log(persona1.nombre);
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);
persona1.apellido = 'Alvarez';
console.log(persona1.apellido);

let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2.nombre);
persona2.nombre = 'Maria Laura';
console.log(persona2.nombre);
persona2.apellido = 'Luna';
console.log(persona1.apellido);
//console.log(persona2);

let empleado1 = new Empleado('Maria', 'Gimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());

// Object.prototype.toString Esta es la manera de acceder a atributos y métodos de manera dinámica

console.log(empleado1.toString());
console.log(persona1.toString());

