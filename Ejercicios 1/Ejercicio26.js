function funcion1(){
    var array = ['a','b','c','d','e','f'];
    console.log(array);
    array.copyWithin(5,0,1);
    console.log(array);
    array.copyWithin(3,0,3);
    console.log(array);
    array.fill('Z',0,5);
    console.log(array);
}
funcion1();
function funcion2(){
    var array = ['Alberto','Ana','Mauricio','Bernardo','Zoe'];
    console.log(array);
    array.sort();
    console.log(array);
    array.reverse();
    console.log(array);
}
funcion2();