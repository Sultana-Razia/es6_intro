const actor = {
    name: 'Ananta',
    age: 30,
    phone: 129439457,
    money: 90000000
};

console.log(actor.phone);

const { name } = actor;
console.log(name);

// array destructuring. 
const numbers = [45, 99]
const [first, second] = numbers;
const [x, y] = [12, 66];

// advanced
function doubleThem(a, b) {
    return [a * 2, b * 2];
}

const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);