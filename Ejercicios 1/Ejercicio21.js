function foo() {
    const a = true;
    function bar(){
        const a = false;
        console.log(a);
    }
    const a= false;
    a= false;
    console.log(a);
}
foo();