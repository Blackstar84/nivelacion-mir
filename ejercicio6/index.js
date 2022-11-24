const pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ['programar', 'squash', 'piano'],
    saluda: function(){
        return "Hola, me llamo " + this.nombre
    }
}

console.log(pedro.edad)

pedro.estatura = 1.8;

console.log(pedro.estatura);

delete pedro.activo;

for(let key in pedro){
 console.log(`${key} ":" ${pedro[key]}`)
}

console.log(pedro.saluda());


function productosBaratos(arreglo) {
    arregloModificado = [];
    for(let key in arreglo){
        
        if (arreglo[key].precio >=5 && arreglo[key].precio <=10) {
            
            arregloModificado.push(arreglo[key].nombre);
        }
    }
    return arregloModificado;
}


let prods = [
    { nombre: "Arroz", precio: 5 },
    { nombre: "Pan", precio: 3 },
    { nombre: "Tomate", precio: 8 },
    { nombre: "Leche", precio: 15 }
  ];
  console.log(productosBaratos(prods));


function frecuencias(palabra){
    let repe = {};
    let palabraNueva = palabra.replace(" ");
    let cadena = palabraNueva.split('');
    
    cadena.forEach(letra => {
        repe[letra]=(repe[letra]+1 || 1);

    });
    

    return repe ;

}

  // código de prueba
console.log(frecuencias("hola mundo"));
// { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }

console.log(frecuencias("anita lava la tina"));
// { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }