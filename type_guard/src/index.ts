// TYPE GUARD

// TYPEOF
function printValue(value: string | number):void{
    if(typeof value == "string"){
        console.log(value.toUpperCase())
    }else{
        console.log(value.toFixed(2))
    }
}

printValue(2)

// INSTANCEOF
class User {
    public name: string
    public age: number
    constructor(name__: string, age__: number){
        this.name = name__
        this.age = age__
    }
    public apresentacao():void{
        console.log(this.name + ' - ' + this.age)
    }
}

class Admin extends User{
    public type: string = 'admin'
    constructor(name__: string, age__:number){
        super(name__, age__)
    }
}

function printUser(user: User | Admin):void{
    if(user instanceof User){
        console.log('Comum user')
    }else{
        console.log('Admin user')
    }
}

const user = new Admin('Emanuel', 21)
printUser(user)

// IN
interface Fish{
    swim: () => void
}

interface Bird{
    fly: () => void
}

function move(animal: Fish | Bird){
    if("swim" in animal){
        animal.swim()
    }else{
        animal.fly()
    }
}

// IS
interface Chef{
    cook():void
    certificate:string
}

interface Teacher{
    teach():void
    diploma:string
}

interface Driver{
    drive():void
    license:string
}

type Professional = Chef | Teacher | Driver

function isChef(value: Professional): value is Chef{
    return (value as  Chef).cook() !== undefined
}
function isTeacher(value: Professional): value is Teacher{
    return (value as  Teacher).teach() !== undefined
}
function isDriver(value: Professional): value is Driver{
    return (value as  Driver).drive() !== undefined
}

function execute(professional: Professional){
    switch(true){
        case isChef(professional):{
            professional
            break
        }
        case isTeacher(professional):{
            professional
            break
        }
        case isDriver(professional):{
            professional
            break
        }
    }
}

// VERIFICAR TIPO DENTRO DA CLASSE
class Profissao{
    isChefe(): this is Chefe{
        return this instanceof Chefe
    }
    isProfessor(): this is Professor{
        return this instanceof Professor
    }
    isMotorista(): this is Motorista{
        return this instanceof Motorista
    }
}

class Chefe extends Profissao{
    public cook():void {}
    public certificate:string = 'Chefe Chico'
}

class Professor extends Profissao{
    public teach():void {}
    public diploma:string = 'Sou Emanuel'
}

class Motorista extends Profissao{
    public drive():void {}
    public license:string = 'Sou Emanuel'
}

function executar(profissional: Profissao){

}