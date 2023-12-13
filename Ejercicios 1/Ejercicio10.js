function john(){
    return 'John';
}
function jacob(){
    return 'Jacob';
}
function funcion(name){
    switch (name){
        case john():
            console.log('I will run if name === "John');
            break;
        case 'Ja' + 'ne':
            console.log('I will run if name === Jane');
            break;
        case john() + ' ' + jacob() + ' Jingleheimer Schmidt':
            console.log('His name is equal to name too!');
            break;
    }
}
funcion('John');
funcion('Jane');
funcion('John Jacob Jingleheimer Schmidt');