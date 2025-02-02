"use strict";
// TYPE GUARD
Object.defineProperty(exports, "__esModule", { value: true });
// TYPEOF
function printValue(value) {
    if (typeof value == "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
printValue(2);
// INSTANCEOF
class User {
    name;
    age;
    constructor(name__, age__) {
        this.name = name__;
        this.age = age__;
    }
    apresentacao() {
        console.log(this.name + ' - ' + this.age);
    }
}
class Admin extends User {
    type = 'admin';
    constructor(name__, age__) {
        super(name__, age__);
    }
}
function printUser(user) {
    if (user instanceof Admin) {
        console.log('Admin user');
    }
    else {
        console.log('Comum user');
    }
}
const user = new Admin('Emanuel', 21);
printUser(user);
