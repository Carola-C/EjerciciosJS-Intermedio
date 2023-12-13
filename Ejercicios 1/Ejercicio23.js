function funcion1(a) {
    return a.slice(0,3).concat([4,5,6,7,a.slice(3,6)]);
}
var a=[1,2,3,8,9,10];
console.log("Array desde funcion1 "+funcion1(a));
console.log("Array a "+a);

var a=[1,2,3,8,9,10];
function funcion2(a){
    return a.splice(3,0, ...[4,5,6,7]);
}
console.log("Array desde funcion2 "+funcion2(a));
console.log("Array a "+a);
