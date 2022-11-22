function join(arreglo){
    let palabra = "";
    for (let i = 0; i < arreglo.length; i++) {
        palabra += arreglo[i] + " ";
    }
    return palabra;
}


console.log(join(["Hola", "Mundo"]));
console.log(join(["Make", "It", "Real"]));
console.log(join([]));