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