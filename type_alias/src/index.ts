// CRIAR TIPOS PERSONALIZADOS
type ID = string | number

let userId: ID = 123

userId = 'abc'

// UNIONS
interface Dog {
    name: string,
    breed: string,
    bark(): string
}

interface Cat {
    name: string,
    color: string,
    meow():string
}

interface Bird {
    name: string,
    wingspan: number,
    chirp(): string
}

interface Cow{
    name: string,
    weight: number,
    moo():string
}

type Animals = Dog | Cat | Bird | Cow

// INTERSECTIONS
type CatDog = Dog & Cat