const max = Math.max(23, 45, 67, 60);
console.log(max);

const numbers = [2, 34, 56, 78, 90, 12, 23, 32, 43, 54];
const arrayMax = Math.max(...numbers);
console.log(arrayMax);


//use spread operator to copy
const nums = [4, 5, 6, 7, 8, 9];
const nums2 = nums;
nums2.push(20);
console.log(nums2);
console.log(nums);
const marks = [...nums2];
console.log(marks);
marks.push(100);
console.log(marks);

const shonka = [...nums2, 200];
console.log(shonka);