function createDate(value) {
    return new Date(value);
}
function generate(type) {
    switch (type) {
        case "dog": return { name: 'thor', breed: 'nao sei' };
        case "house": return { address: 'x', size: 50 };
        case "person": return { name: 'Emanuel', age: 21 };
    }
}
var InputType;
(function (InputType) {
    InputType[InputType["String"] = 0] = "String";
    InputType[InputType["Number"] = 1] = "Number";
    InputType[InputType["Date"] = 2] = "Date";
    InputType[InputType["Email"] = 3] = "Email";
    InputType[InputType["Password"] = 4] = "Password";
})(InputType || (InputType = {}));
function buildComponent(id, label, arg) {
    if (typeof arg == 'string') {
        return { id, label, style: arg };
    }
    else if (Array.isArray(arg)) {
        return { id, label, options: arg };
    }
    else {
        return { id, label, type: arg };
    }
}
const btn = buildComponent(20, 'Enviar', '{color: red; padding: 20px}');
const select = buildComponent(20, 'x', ['Fruta', 'Carro', 'Futebol']);
const inpt = buildComponent(20, 'Enviar', InputType.Number);
console.log(btn);
console.log(select);
console.log(inpt);
function triangle(A, B, C) {
    if (B && C) {
        return { type: "scalene", sideA: A, sideB: B, sideC: C };
    }
    else if (B && !C) {
        return { type: "isosceles", sideA: A, sideBC: B };
    }
    else {
        return { sides: A };
    }
}
const t1 = triangle(2);
const t2 = triangle(2, 3);
const t3 = triangle(2, 3, 5);
console.log(t1, t2, t3);
/////////////// overload em constructors
class Player {
    apresentacao() {
        console.log(this.name);
    }
}
class PlayerOne extends Player {
    name;
    constructor(name) {
        super();
        this.name = name;
    }
    apresentacao() {
        console.log(this.name + `ói`);
    }
}
const p1 = new PlayerOne('Emanuel');
p1.apresentacao();
export {};
