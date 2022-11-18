
function calcularColor(num){
    var color;
    if (num===1){
        color = "black";
    }else if (num===2){
        color = "blanco";
    }else if(num===3){
        color = "rojo";
    }else{
        color = "verde";
    }
    return "El color es: " + color;
}


console.log(calcularColor(1));
console.log(calcularColor(2));
console.log(calcularColor(3));
console.log(calcularColor(4));