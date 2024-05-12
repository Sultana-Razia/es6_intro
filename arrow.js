function add(num1, num2) {
    const result = num1 + num2;
    return result;
}

const sum = add(10, 20);
// console.log(sum);

//function expression
const add2 = function (a, b) {
    return a + b;
}


//arrow function
const add3 = (a, b) => a + b;

const sum3 = add(10, 20);
console.log(sum3);