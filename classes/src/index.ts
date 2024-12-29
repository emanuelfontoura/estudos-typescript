// CLASSES
class Player {

    public name : string
    private health : number
    private dead : boolean
    
    private static players : Player[] = []

    constructor(name: string){
        this.name = name
        this.health = 20
        this.dead = false
        Player.players.push(this)
    }

    public getHealth():number{
        return this.health
    }

    public damage(amount:number, damager?:Player):void{
        if(damager && damager != this){
            console.log(`${damager.name} attacks ${this.name}`)
        }else if(damager && damager == this){
            throw new Error('The same player cannot attack himself')
        }
        else{
            console.log(`${this.name} took ${amount} damage`)
        }
        if((this.health - amount) <= 0){
            this.dead = true
            this.health = 0
        }else{
            this.health -= amount
        }
    }

    public getDead():boolean{
        return this.dead
    }

    public healing(amount:number):void{
        this.health += amount
    }

    public static getPlayers():Player[]{
        return this.players
    }
}

const player1 = new Player('Emanuel')
const player2 = new Player('Gabriel')

player1.damage(100, player2)
console.log(player1.getHealth())
console.log(player1.getDead())

console.log(Player.getPlayers())

// HERANÇA DE CLASSES
class Animal {
    public name : string
    public age : number

    constructor(name: string, age:number){
        this.name = name
        this.age = age
    }

    makeSound(){
        console.log(`${this.name} está fazendo um som`)
    }
}

class Dog extends Animal{
    raca : string

    constructor(name: string, age: number, raca: string){
        super(name, age)
        this.raca = raca
    }

    makeSound(){
        console.log(`${this.name} está latindo`)
    }
}

const dog1 = new Dog('Thor', 3, 'Yorkshire')
dog1.makeSound()

// IMPLEMENTANDO INTERFACE NA CLASSE
interface Drivable {
    startEngine(): void
    drive():void
}

class Car implements Drivable{
    startEngine(): void {
        console.log('Carro ligado')
    }
    drive(): void {
        console.log('Carro está sendo dirigido')
    }
    break(): void{
        console.log('Carro parado')
    }
}

// CLASSES ABSTRATAS
abstract class Shape{
    abstract area():number

    describe():void{
        console.log('Isto é uma forma')
    }
}

class Circle extends Shape{
    radius : number
    constructor(radius:number){
        super()
        this.radius = radius
    }
    area():number{
        return Math.PI * this.radius ** 2
    }
}

const circle = new Circle(5)
console.log(circle.area())
circle.describe()

// MODIFICAR PROTECTED
class Person {
    protected age : number
    constructor(age:number){
        this.age = age
    }
    protected getAge():number{
        return this.age
    }
}

class Employee extends Person{
    private name: string
    constructor(name:string, age:number){
        super(age)
        this.name = name
    }
    public introduce():void{
        console.log(`Eu sou o(a) ${this.name} e tenho ${this.getAge()} anos de idade`)
    }
}

const emp1 = new Employee('Emanuel', 21)
emp1.introduce()