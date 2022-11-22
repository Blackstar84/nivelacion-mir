function max(arreglo){
    return arreglo.reduce((prev, curr) => prev > curr ? prev: curr, undefined);
}

console.log(max([1,3,2]));
console.log(max([10, 9, 8, 7 ,6 , 5, 4]));
console.log(max([]));
