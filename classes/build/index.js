// CLASSES
class Player {
    name;
    health;
    dead;
    static players = [];
    constructor(name) {
        this.name = name;
        this.health = 20;
        this.dead = false;
        Player.players.push(this);
    }
    getHealth() {
        return this.health;
    }
    damage(amount, damager) {
        if (damager && damager != this) {
            console.log(`${damager.name} attacks ${this.name}`);
        }
        else if (damager && damager == this) {
            throw new Error('The same player cannot attack himself');
        }
        else {
            console.log(`${this.name} took ${amount} damage`);
        }
        if ((this.health - amount) <= 0) {
            this.dead = true;
            this.health = 0;
        }
        else {
            this.health -= amount;
        }
    }
    getDead() {
        return this.dead;
    }
    healing(amount) {
        this.health += amount;
    }
    static getPlayers() {
        return this.players;
    }
}
const player1 = new Player('Emanuel');
const player2 = new Player('Gabriel');
player1.damage(100, player2);
console.log(player1.getHealth());
console.log(player1.getDead());
console.log(Player.getPlayers());
// HERANÇA DE CLASSES
class Animal {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    makeSound() {
        console.log(`${this.name} está fazendo um som`);
    }
}
class Dog extends Animal {
    raca;
    constructor(name, age, raca) {
        super(name, age);
        this.raca = raca;
    }
    makeSound() {
        console.log(`${this.name} está latindo`);
    }
}
const dog1 = new Dog('Thor', 3, 'Yorkshire');
dog1.makeSound();
class Car {
    startEngine() {
        console.log('Carro ligado');
    }
    drive() {
        console.log('Carro está sendo dirigido');
    }
    break() {
        console.log('Carro parado');
    }
}
// CLASSES ABSTRATAS
class Shape {
    describe() {
        console.log('Isto é uma forma');
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}
const circle = new Circle(5);
console.log(circle.area());
circle.describe();
// MODIFICAR PROTECTED
class Person {
    age;
    constructor(age) {
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}
class Employee extends Person {
    name;
    constructor(name, age) {
        super(age);
        this.name = name;
    }
    introduce() {
        console.log(`Eu sou o(a) ${this.name} e tenho ${this.getAge()} anos de idade`);
    }
}
const emp1 = new Employee('Emanuel', 21);
emp1.introduce();
export {};
