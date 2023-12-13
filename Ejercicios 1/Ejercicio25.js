var array = [5,10,15,20,25];
function esArray(array){
    console.log(Array.isArray(array));
}
function incluye1(array){
    console.log(array.includes(10));
}
function incluye2(array){
    console.log(array.includes(10,2));
}
function indice(array){
    console.log(array.indexOf(25));
}
function ultimoIndice(array){
    console.log(array.lastIndexOf(10,0));
}
esArray(array);
incluye1(array);
incluye2(array);
indice(array);
ultimoIndice(array);
console.log(array);