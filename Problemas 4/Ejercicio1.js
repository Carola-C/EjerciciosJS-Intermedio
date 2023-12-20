function ejercicio1(){
    var anObject = {
        foo: 'bar',
        length: 'interesting',
        '0': 'zero!',
        '1': 'one!'
    };
    var anArray =['zero.','one.'];
    //Aquí en object hace referencia al nombre de la propiedad y no de la posición
    console.log(anArray[0], anObject[0]);
    //Pasa lo mismo que el anterior
    console.log(anArray[1], anObject[1]);
    //Aunque length sea un método, en objeto hay una propiedad llamada igual por lo que tienen prioridad
    console.log(anArray.length, anObject.length);
    //En el array no se puede acceder con el uso de puntos
    console.log(anArray.foo, anObject.foo);
    //Ambos son tomados como objetos
    console.log(typeof anArray == 'object', typeof anObject=='object');
    //Como son ambos tomados como objeto es verdadero
    console.log(anArray instanceof Object, anObject instanceof Object);
    //Aquí si se diferencia entre el objeto y el array
    console.log(anArray instanceof Array, anObject instanceof Array);
    //La clase Array muestra si pertenece a una instancia del mismo
    console.log(Array.isArray(anArray), Array.isArray(anObject));
}
ejercicio1();