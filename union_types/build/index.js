import { readFile } from "fs/promises";
export function test(value) {
    if (typeof value == "string") {
        console.log('string');
    }
    else if (typeof value == 'number') {
        console.log('number');
    }
    else {
        console.log('boolean');
    }
    return value;
}
function status(action) {
    if (action === 'Enabled') {
        return 'OK';
    }
    return 404;
}
const jsonString = await readFile('json.json', 'utf-8');
const json = JSON.parse(jsonString);
console.log(json);
