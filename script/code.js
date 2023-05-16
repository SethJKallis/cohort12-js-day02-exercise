const subjectArray = ['Python', 'C++', 'VB.Net', 'JavaScript', 'Assembly'];

const firstValue = subjectArray.splice(0,1, 'Python');
const middleValue = subjectArray.splice(-1,1, 'Assembly');
const lastValue = subjectArray.splice((subjectArray.length-1)/2,1, 'VB.Net');

console.log(firstValue);
console.log(middleValue);
console.log(lastValue);

console.log(subjectArray)