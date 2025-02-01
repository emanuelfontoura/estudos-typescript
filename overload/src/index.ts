// OVERLOAD
/**
 Criar uma nova data a partir de outra
 */
function createDate(value:Date):Date
/**
 Criar uma nova data a partir de números
 */
function createDate(value:number):Date
/**
 Criar uma nova data a partir de uma string
 */
function createDate(value:string):Date
function createDate(value : Date | number | string):Date{
    return new Date(value)
}

////////////////// overloads que mudam o retorno da função

interface Person {
    name: string,
    age: number
}

interface Dog{
    name: string,
    breed:string
}

interface House{
    address:string,
    size:number
}

function generate(type: "person"):Person;
function generate(type: "dog"):Dog;
function generate(type: "house"):House;
function generate(type: "dog" | "house" | "person")
{
    switch(type){
        case "dog": return { name: 'thor', breed: 'nao sei' }
        case "house": return { address: 'x', size: 50 }
        case "person": return { name: 'Emanuel', age: 21 }
    }
}

///////////////// exemplo prático

interface Component{
    id: number,
    label: string
}

interface Button extends Component{
    style: string
}

interface SelectMenu extends Component{
    options: string[]
}

interface Input extends Component{
    type: InputType
}

enum InputType{
    String,
    Number,
    Date,
    Email,
    Password
}

function buildComponent(id: number, label:string, style: string): Button;
function buildComponent(id: number, label:string, options: string[]): SelectMenu;
function buildComponent(id: number, label:string, type: InputType): Input;
function buildComponent(id: number, label:string, arg: string | string[] | InputType)
{
    if(typeof arg == 'string'){
        return {id, label, style: arg}
    }else if (Array.isArray(arg)){
        return {id, label, options: arg}
    }  else{
        return {id, label, type: arg}
    }
}

const btn = buildComponent(20, 'Enviar', '{color: red; padding: 20px}')
const select = buildComponent(20, 'x', ['Fruta', 'Carro', 'Futebol'])
const inpt = buildComponent(20, 'Enviar', InputType.Number)

console.log(btn)
console.log(select)
console.log(inpt)

/////////////// retorno de acordo com a qtde de parâmetros

interface Triangle{
    sideA: number,
    sideB: number,
    sideC: number,
}

interface Equilateral extends Triangle{
    type: "equilateral"
}

interface Isosceles extends Triangle{
    type: "isosceles"
}

interface Scalene extends Triangle{
    type: "scalene"
}

type Triangles = Equilateral | Scalene | Isosceles

function triangle(sides:number): Equilateral;
function triangle(sideA:number, sideBC: number): Isosceles;
function triangle(sideA: number, sideB: number, sideC: number): Scalene;
function triangle(A: number, B?: number, C?: number)
{
    if(B && C){
        return {type: "scalene", sideA: A, sideB: B, sideC: C}
    }else if (B && !C){
        return {type: "isosceles", sideA: A, sideBC: B}
    }else{
        return {sides: A}
    }
}

const t1 = triangle(2)
const t2 = triangle(2, 3)
const t3 = triangle(2, 3, 5)

console.log(t1, t2, t3)

/////////////// overload em constructors

abstract class Player{
    abstract name: string
    apresentacao() : void {
        console.log(this.name)
    }
}

class PlayerOne extends Player {
    public name: string
    public nickname : string
    public health : number

    constructor(name: string)
    constructor(name: string, nickname: string)
    constructor(name: string, health: number)
    constructor(name: string, arg?: string | number){
        super()
        this.name = name
        if(typeof arg == 'string'){
            this.nickname = arg
            this.health = 0
        }else if(typeof arg == 'number'){
            this.health = arg
            this.nickname = name
        }else{
            this.health = 0
            this.nickname = name
        }
    }

    apresentacao(): void {
        console.log(this.name + `ói`)
    }
}

const p1 = new PlayerOne('Emanuel')
p1.apresentacao()