function funcion(x){
    switch (x) {
        case "a":
        case "b":
        case "c":
            console.log("Either a, b, or c was selected");
            break;
        case "d":
            console.log("Only d was selected");
            break;
        default:
            console.log("No one case was matched");
            break;
    }
}
funcion("a");
funcion("d");
funcion("b");
funcion("e");
funcion("c");