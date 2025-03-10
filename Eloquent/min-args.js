const minValues = (a, b) => (a < b ? a : b);

console.log(minValues(1, 2)); // 1
console.log(minValues(3, 1)); // -1
console.log(minValues(12, 2)); // 2
console.log(minValues(12, 20)); // 2
