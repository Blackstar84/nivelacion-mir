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
