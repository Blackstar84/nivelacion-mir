function numMay(arreglo){
    let mayor = 0;
    for(i = 0; i < arreglo.length; i++){
        if (arreglo[i] > mayor)
        {
            mayor = arreglo[i];
        }
    }
    return mayor;
}    

console.log(numMay([2,3,6,8]));