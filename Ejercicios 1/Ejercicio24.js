var array = ['a', 'b', 'c'];
function arrayjoin1(array){
    console.log(array.join('->'));
}
function arrayjoin2(array){
    console.log(array.join('.'));
}
function split1(){
    console.log('a.b.c'.split('.'));
}
function split2(){
    console.log('5.4.3.2.1'.split('.'));
}
arrayjoin1(array);
arrayjoin2(array);
split1();
split2();
console.log(array);
