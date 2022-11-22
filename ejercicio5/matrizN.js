function matriz(n){
    let resultado = new Array(n).fill().map(()=> new Array(n).fill(''));
    let contador = 1;
    let inicioColumna = 0;
    let finalColumna = n - 1;
    let inicioFila = 0;
    let finFila = n - 1;

    while (inicioColumna <= finalColumna && inicioFila <= finFila) {
        for (let i = inicioColumna; i <= finalColumna; i++) {
            resultado[inicioFila][i] = contador;
            contador++;
        }
        inicioFila++;
        for (let j = inicioFila; j <= finFila; j++) {
            resultado[j][finalColumna] = contador;
            contador++;
        }

        finalColumna--;

        for (let i = finalColumna; i >= inicioColumna; i--) {
            resultado[finFila][i] = contador;
            contador++;
        }

        finFila--;
        for (let i = finFila; i >= inicioFila; i--) {
            resultado[i][inicioColumna] = contador;
            contador++;
        }

        inicioColumna++;

    }

    return resultado;

    

}

console.log(matriz(2));
console.log(matriz(3));
console.log(matriz(4));