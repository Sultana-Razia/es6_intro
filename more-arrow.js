const difference = (x, y) => x - y;

//single parameter
const getAge = (person) => person.age;
const student = { name: "Rahim", age: 45 };
const age = getAge(student);
console.log(age);


const getThird = numbers => numbers[2];
const third = getThird([2, 34, 70, 60]);
console.log(third);



const doubleIt = num => num * 2;


//no parameter
const getPI = () => Math.PI;
console.log(getPI());


//large arrow function
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const multy = x * y * z;
    const result = multy - sum;
    return result;
}