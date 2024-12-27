import { readFile } from "fs/promises"

// UNION TYPES
type Primitive = string | number | boolean

export function test(value: Primitive):Primitive{
    if (typeof value == "string"){
        console.log('string')
    }else if(typeof value == 'number'){
        console.log('number')
    }else{
        console.log('boolean')
    }
    return value
}

type Status = 'OK' | 404 | 400 | 'Forbbiden'

type Action = 'Enabled' | 'Disabled' | 'Pending'

function status(action:Action):Status{
    if(action === 'Enabled'){
        return 'OK'
    }
    return 404
}

type JSONValue = string | number | boolean | JSONValue[] | { [key: string] : JSONValue}

const jsonString = await readFile('json.json', 'utf-8')
const json : JSONValue = JSON.parse(jsonString)

console.log(json)

// EXEMPLO PRÁTICO

type FindItemReturn = string | boolean | undefined
type FindItemPredicate = (number) | ((value: string, index:number) => boolean)
function findItem (array : string[], predicate : FindItemPredicate):FindItemReturn{
    if(typeof predicate == 'number'){
        return array[predicate]
    }
    return array.find(predicate)
}