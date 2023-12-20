class Person {
    constructor(nombre, apellido){
        this.firstname = nombre;
        this.lastname = apellido;
    }

    get firstname(){
        return this._firstname;
    }
    set firstname(newName){
        this._firstname = newName;
    }

    get lastname(){
        return this._lastname;
    }
    set lastname(newLastName){
        this._lastname = newLastName;
    }
}

let person = new Person('John', 'Doe');
console.log(person.firstname, person.lastname);

person.firstname = 'Foo';
person.lastname = 'Bar';

console.log(person.firstname, person.lastname);