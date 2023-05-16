const subjectArray = ['Python', 'C++', 'VB.Net', 'JavaScript', 'Assembly'];

const middleValue = subjectArray.splice(-1,1, 'Assembly');
const lastValue = subjectArray.splice((subjectArray.length-1)/2,1, 'VB.Net');

console.log(middleValue);
console.log(lastValue);

console.log(subjectArray);