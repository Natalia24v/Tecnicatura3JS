// while
let contador = 0;
while(contador < 3){
    console.log(contador);
    contador++;
}
console.log("Fin de ciclo While");

//do while
let conteo = 0;
do{
    console.log(conteo);
    conteo++;
}while(conteo < 3);
console.log("Fin de ciclo Do While");

//for
for( let contando = 0; contando < 3; contando++){
    console.log(contando);
}
console.log("Fin del ciclo For");

//palabra reservada break
for(let contando =0; contando <= 10; contando++){
    if(contando % 2 == 0){
        console.log(contando);
         break;
    }
    
}
console.log("Termina el ciclo al encontrar el primer numero par");

// la palabra continue y Etiqutas Labels las etiquetas labels no se recomienda usarlas
inicio:
for(let contando =0; contando <= 10; contando++){
    if(contando % 2 !== 0){
        continue inicio; // irá a la siguiente iteración
    }
    console.log(contando);
}
console.log("Termina el ciclo");


