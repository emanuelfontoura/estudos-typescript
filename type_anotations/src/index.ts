// TYPE ANOTATIONS

// VARIÁVEIS
let nome : string = "Emanuel"
let numero : number = 2
let match : boolean = true

// ARRAYS
let frutas : string[] = ['Morango', 'Maçã', 'Uva']
let numeros : number[] = [1, 2, 3, 4, 5]
let matches : boolean[] = [true, false, true, true]

// OBJETOS
let carro : {
    marca : string,
    modelo : string,
    ano: number
}

carro = {marca: 'FIAT', modelo: 'TORO', ano: 2020}

// FUNCTIONS
function showFrutas( frutas : string[], retorno?:any ) : string{
    frutas.forEach(fruta => {
        console.log(fruta)
    })
    return retorno || undefined
}

let txt:string = showFrutas(frutas, 'TESTE')
console.log(txt)