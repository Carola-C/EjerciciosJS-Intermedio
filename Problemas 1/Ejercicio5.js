function minimoMayor(){
    var myArray =[1,2,3,4];
    let max;
    let min;
    max = Math.max(...myArray);
    min = Math.min(...myArray);
    console.log(`Máximo es ${max}`);
    console.log(`Mínimo es ${min}`);
}
minimoMayor()