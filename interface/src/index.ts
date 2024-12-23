// INTERFACE
interface User {
    name:string,
    talk():void
}

// ESTENDER UMA INTERFACE
interface Admin extends User{
    ban(user:User):void,
    kick(user:User):void
}

// FUNÇÃO PARA PROMOVER UM USER A ADMIN
function promoterUser(user:User) :Admin{
    return {
        ...user,
        ban(userToBan){
            console.log(`Usuário ${userToBan} foi banido por ${this.name}`)
        },
        kick(userToKick){
            console.log(`Usuário ${userToKick} foi expulso por ${this.name}`)
        }
    }
}

// FUNÇÃO PARA CRIAR UM USER
function createUser(name:string):User{
    return {
        name,
        talk(){
            console.log(`${name} falou.`)
        }
    }
}

const emanuel = createUser('emanuel')
console.log(emanuel)

// TORNAR O USER CRIADO EM ADMIN
const adminEmanuel = promoterUser(emanuel)
console.log(adminEmanuel)

// ESTENDER UMA INTERFACE NATIVA OU EXTERNA
declare global {
    interface Console {
        sayHello():void
    }
}

Object.assign(console, {
    sayHello(){
        console.log('Hello')
    }
})

console.sayHello()