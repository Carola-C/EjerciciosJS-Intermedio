function filtro(){
    var numbers =[5,32,43,4];
    var nuevoArreglo =[];
    nuevoArreglo=numbers.filter(function(n){ return n%2 !==0;});
    return nuevoArreglo;
}

console.log(filtro());