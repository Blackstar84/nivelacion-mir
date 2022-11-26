let receta = {}

receta.nombre = 'Sandwich';
receta.ingredientes = [];
receta.ingredientes.push({nombre: "Pan", cantidad: 2});
receta.ingredientes.push({nombre: "Queso", cantidad: 1});

console.log(receta.ingredientes[0].nombre);

let suma = 0;
for (let i = 0; i < receta.ingredientes.length; i++) {
    const element = receta.ingredientes[i];
    suma += receta.ingredientes[i].cantidad;
}

console.log(suma);

let vecesRepetido=0;
let letraRepetida='';

function maxCaracter(palabra){
    let palabra = palabra.toUpperCase() ;
    for(let i = 0; i < palabra.length; i++){
        let re = new RegExp("[^"+ palabra[i] +"]","g");
        let repetido=palabra.replace(re, "");
        
        if(repetido.length >= vecesRepetido){
            vecesRepetido=repetido.length;
            letraRepetida=repetido[0];
        }
    }
    return letraRepetida;
}

console.log(maxCaracter("abcccccd")) // "c"
console.log(maxCaracter("manzana 12311111")) // "1"


function palindrome(str) {
    str = str.toLowerCase();
    const strReversed = str.split("").reverse().join("");
  
    return strReversed === str ? "es palindromo" : "no es palindromo";
  }
  console.log(palindrome("Amor a Roma")) // Output: true

console.log(palindrome("vamos makers!")) // Output: false