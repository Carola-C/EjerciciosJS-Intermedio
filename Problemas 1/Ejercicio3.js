function filtro(){
    var people =[{
        id:1,
        name: "John",
        age: 28
        },{
            id: 2,
            name: "Jane",
            age: 31
        },{
            id: 3,
            name: "Peter",
            age: 55
        }
    ];
     let nuevoArreglo ={};
      nuevoArreglo= people.filter(function(item){
        if (item.age<35) {
            return item.name;
        }
     });
     return nuevoArreglo.forEach(element => {
        console.log(element);
    });
}
 filtro();