interface User {
    name:string,
    talk():void
}

interface Admin extends User{
    ban(user:User):void,
    kick(user:User):void
}