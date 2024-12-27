// TYPE ANOTATIONS
// VARIÁVEIS
let nome = "Emanuel";
let numero = 2;
let match = true;
// ARRAYS
let frutas = ['Morango', 'Maçã', 'Uva'];
let numeros = [1, 2, 3, 4, 5];
let matches = [true, false, true, true];
// OBJETOS
let carro;
carro = { marca: 'FIAT', modelo: 'TORO', ano: 2020 };
// FUNCTIONS
function showFrutas(frutas, retorno) {
    frutas.forEach(fruta => {
        console.log(fruta);
    });
    return retorno || undefined;
}
let txt = showFrutas(frutas, 'TESTE');
console.log(txt);
export {};
