var user = {
    name: 'Samlak',
    sayHi () {
        console.log(arguments);
        console.log(`This is ${this.name}`);
    }
}
user.sayHi(6, 4);