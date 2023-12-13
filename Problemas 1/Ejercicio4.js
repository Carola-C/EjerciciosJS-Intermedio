function nombres(){
    let people = [
        {name: "bob", id:1},{name: "john", id:2},
        {name: "alex", id:3},{name: "john", id:3}
    ];
    let resultado='';
    for (let i = 0; i < people.length; i++) {
        let cont=0;
        for (let j = 0; j < people.length; j++) {
            if (people[i].name==people[j].name) {
                cont++;
            }
        }
        resultado.includes(people[i].name)==false?
        resultado += `${people[i].name} aparece ${cont}\n`: '';
    }
    console.log(resultado);
}
nombres()