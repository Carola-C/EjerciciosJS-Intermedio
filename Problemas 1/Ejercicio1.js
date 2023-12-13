function concatenar(){
    let clientes = ["Cliente 1", "Cliente 2", "Cliente 3", "Cliente 4"];
    let empleados = ["Empleados 1", "Empleados 2", "Empleados 3", "Empleados 4"];
    let contactos =[];
    console.log("concat une ambos arrays sin tener dificultad");
    console.log(contactos.concat(clientes,empleados));
}
concatenar();

function unir(){
    var strContactos;
    let clientes = ["Cliente 1", "Cliente 2", "Cliente 3", "Cliente 4"];
let empleados = ["Empleados 1", "Empleados 2", "Empleados 3", "Empleados 4"];
    strContactos = clientes.join(',');
    strContactos += empleados.join(',');
    console.log("join agrega clientes pero después concatena el último de clientes con el primero de empleados y se pierde información");
    console.log(strContactos);
}
unir();

function agregar(){
    let clientes = ["Cliente 1", "Cliente 2", "Cliente 3", "Cliente 4"];
let empleados = ["Empleados 1", "Empleados 2", "Empleados 3", "Empleados 4"];
let contactos =[];
    for (let i = 0; i < clientes.length; i++) {
        contactos.push(clientes[i]);
    }
    for (let i = 0; i < empleados.length; i++) {
        contactos.push(empleados[i]);
    }
    console.log("push Agrega ambos arreglos de forma correcta pero se útilizan 2 sentencias for");
    console.log(contactos);
}
agregar();

function agregar2(){
    let clientes = ["Cliente 1", "Cliente 2", "Cliente 3", "Cliente 4"];
let empleados = ["Empleados 1", "Empleados 2", "Empleados 3", "Empleados 4"];
let contactos =[];
    contactos = clientes.splice(0, clientes.length);
    contactos += empleados.splice(0, empleados.length);
    console.log("splice sucede algo similar a join");
    console.log(contactos);
}
agregar2()

