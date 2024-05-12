const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};
// console.log(glass);


// all properties name
const keys = Object.keys(glass);
console.log(keys);
// [ 'name', 'color', 'price', 'isCleaned' ]

// all property values
const values = Object.values(glass);
console.log(values)
// [ 'glass', 'golden', 12, true ]

const entries = Object.entries(glass);
// console.log(entries);
// array of array, two dimensional array
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
// ]

// delete glass.isCleaned;

const { isCleaned, ...shortGlass } = glass;
// console.log(shortGlass);

// freeze 
// Object.freeze(glass);
Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
// console.log(glass);