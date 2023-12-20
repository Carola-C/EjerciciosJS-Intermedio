function orden(){
    var object = {
        key1: 10,
        key2: 3,
        key3: 40,
        key4: 20
    }
    var miArray =[];
    miArray = Object.values(object);
    var fc = function(a,b){
        return a-b;
    }
    miArray.sort(fc);
    console.log(miArray);
}
orden();