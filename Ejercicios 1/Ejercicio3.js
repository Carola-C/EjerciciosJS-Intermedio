function eslindo(animal){
    //var animal ='kitty';
    var result ='';
    if (animal==='kitty') {
        result='cute';
    } else {
        result = 'still cute';
    }
    return 'Desde función '+result;
}
console.log(eslindo('kitty'));
console.log(eslindo('dog'));