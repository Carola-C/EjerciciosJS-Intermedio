class Queue {
    constructor(){
        const list = [];

        this.enqueue = function (type){
            list.push(type);
            return type;
        };
        this.dequeue = function (){
            return list.shift();
        };
    }
}

var q = new Queue;
q.enqueue(9);
q.enqueue(8);
q.enqueue(7);

//El método dequeue nos elimina la primera posición del arreglo de la clase y la devuelve
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
//Muestra los métodos porque están definidos con this y list no
console.log(q);
console.log(Object.keys(q));