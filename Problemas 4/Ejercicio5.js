class MyClass{
    constructor(){
        this.names_ =[];
    }
    set name(value){
        this.names_.push(value);
    }
    get name(){
        return this.names_[this.names_.length-1];
    }
}
const myClassInstance = new MyClass();
myClassInstance.name = 'Joe';
myClassInstance.name = 'Bob';
//Se muestra solo Bob porque el metodo get name devuelve la posición del tamaño menos 1
console.log(myClassInstance.name);
console.log(myClassInstance.names_);