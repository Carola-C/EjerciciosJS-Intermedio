function filtro(){
    var numbers =[5,32,43,4];
    var nuevoArreglo =[];
    nuevoArreglo=numbers.filter(function(n){ return n%2 !==0;});
    return nuevoArreglo;
}
console.log('En el método filter se agrega una función la cual va a devolver aquellos números impares')
console.log(filtro());