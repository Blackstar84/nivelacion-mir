function maxIndex(arreglo){
    let indiceMaximo = 0;
    if(arreglo.length>0){
        indiceMaximo = arreglo.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
    }else{
        indiceMaximo = -1
    }
    return indiceMaximo;
}


console.log(maxIndex([1,3,2]));
console.log(maxIndex([10, 9, 8, 7 ,6 , 5, 4]));
console.log(maxIndex([]));