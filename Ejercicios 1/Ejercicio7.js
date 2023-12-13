function funcion(animal){
    //var animal = 'kitty';
    for (var i = 0; i < 5; i++) {
        //(animal === 'kitty') ? break: console.log(i);
        if (animal === 'kitty') {
            console.log(i);
            break;
        }
    }
}
funcion('dog');
funcion('kitty');