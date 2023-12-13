function funcion(a, b){
    //var a =0;
    var str = 'not a';
    //var b='';
    b=a===0 ? (a=1, str += ' test') : a=2;
    return `Valor en a: ${a}
    Valor en str: ${str}
    `;
}
console.log(funcion(0,''));
console.log(funcion(1,4));
