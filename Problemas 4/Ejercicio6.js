const classInstance = new class {
    get prop() {
        return 5;
    }
}
classInstance.prop = 10;
console.log(classInstance.prop);