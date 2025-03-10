// function maximo(numbers) {
//   let max = -Infinity;
//   for (let number of numbers) {
//     if (number > max) max = number;
//   }
//   return max;
// }

// Previous code...

// function maximo(numbers) {
//   let max = -Infinity;
//   for (let number of numbers) {
//     if (number > max) max = number;
//   }
//   return max;
// }
// const max = (...numbers) => {
//   let max = -Infinity;
//   for (let number of numbers) {
//     if (number > max) max = number;
//   }
//   return max;
// };
//
// const numbers1 = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// const numbers2 = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
//
// console.log(maximo(numbers1));
// console.log(max(...numbers2));
//
// ==============================================================================
//
// let words = ["never", "fully"];
//
// ==============================================================================
//
// let strings = JSON.stringify({
//   name: "X",
//   born: 1980,
//   events: ["work", "touched tree", "pizza", "running"],
// });
// console.log(typeof strings);
//
// let obj = JSON.parse(strings);
// console.log(typeof obj);
//
// ==============================================================================
//
// const range = (start, end, step = start < end ? 1 : -1) => {
//   let array = [];
//   if (step > 0) {
//     for (let i = start; i <= end; i += step) array.push(i);
//   } else {
//     for (let i = start; i >= end; i += step) array.push(i);
//   }
//   return array;
// };
//
// console.log(range(1, 10));
// console.log(range(1, 10, 2));
// console.log(range(5, 2, -1));
// console.log(range(5, 2, -2));
// console.log(range(5, 2));
//
// ==============================================================================
//
// const reverseArray = (array) => {
//   let newArray = [];
//   for (let i = array.length - 1; i >= 0; i--) newArray.push(array[i]);
//   return newArray;
// };
//
// const reverseArrayInPlace = (array) => {
//   for (let i = 0; i < Math.floor(array.length / 2); i++) {
//     let old = array[i];
//     array[i] = array[array.length - 1 - i];
//     array[array.length - 1 - i] = old;
//   }
//   return array;
// };
//
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// console.log(reverseArray(arr));
// console.log(reverseArrayInPlace(arr));
//
// ==============================================================================
//
// const arrayToList = (array) => {
//   let list = null;
//   for (let i = array.length - 1; i >= 0; i--) {
//     list = { value: array[i], rest: list };
//     console.log(list);
//   }
//   return list;
// };
//
// const listToArray = (list) => {
//   let array = [];
//   for (let node = list; node; node = node.rest) {
//     array.push(node.value);
//   }
//   return array;
// };
//
// const prepend = (value, list) => {
//   return { value, rest: list };
// };
//
// const nth = (list, n) => {
//   if (!list) return undefined;
//   else if (n === 0) return list.value;
//   else return nth(list.rest, n - 1);
// };
//
// const list = arrayToList([10, 20, 30]);
// console.log(list);
// console.log(listToArray(list));

// ==============================================================================
//
// const deepEqual = (a, b) => {
//   if (a === b) return true;
//
//   if (a == null || typeof a != "object" || b == null || typeof b != "object")
//     return false;
//
//   let keysA = Object.keys(a),
//     keysB = Object.keys(b);
//
//   if (keysA.length != keysB.length) return false;
//
//   for (let key of keysA) {
//     if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
//   }
//
//   return true;
// };
//
// ==============================================================================

// const recuriveEven = (n) => {
//   if (n === 0) return true;
//   else if (n === 1) return false;
//   else return recuriveEven(n - 2);
// };
//
// console.log(recuriveEven(3));

// ==============================================================================
//
// const repeat = (n, action) => {
//   for (let i = 0; i < n; i++) {
//     action(i);
//   }
// };
//
// let labels = [];
// repeat(5, (i) => {
//   labels.push(`Unit ${i + 1}`);
// });
//
// console.log(labels);

// ==============================================================================
//
// function greaterThan(n) {
//   return (m) => m > n;
// }
//
// let greaterThan10 = greaterThan(10);
// console.log(undefined > 10);
// console.log(greaterThan10);
// console.log(greaterThan10(11));

// ==============================================================================
//
// const noisy = (f) => {
//   return (...args) => {
//     console.log("calling with", args);
//     let result = f(...args);
//     console.log("called with", args, ", returned", result);
//     return result;
//   };
// };
//
// noisy(Math.min)(3, 2, 1);
//
// noisy(Math.min)(3, 2, 1);
//
// ==============================================================================
//
// const numbers = [1, 2, 3, 4, 5];
//
// const doubleNumbers = numbers.map((number) => number * 2);
//
// console.log(doubleNumbers);
//
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
//
// console.log(evenNumbers);
//
// const sum = numbers.reduce((a, b) => a + b);
//
// console.log(sum);
//
// // ==============================================================================
// //
//
// const fruits = ["apple", "banana", "grapes", "mango", "orange"];
//
// const fruitsToUpperCase = fruits.map((fruit) => fruit.toUpperCase());
//
// console.log(fruitsToUpperCase);
//
// const fruitFiveCharacters = fruits.filter((fruit) => fruit.length === 5);
//
// console.log(fruitFiveCharacters);
//
// // ==============================================================================
// //
// const animals = ["dog", "cat", "elephants", "bee", "ant"];
//
// // const longWord = animals.reduce((a, b) => (a.length > b.length ? a : b));
//
// const longWord = animals.reduce(
//   (acc, curr) => Math.max(acc, curr.length),
//   -Infinity,
// );
// console.log(longWord);
//
// ==============================================================================
//
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// const test = array.map((number) => Math.pow(number, 2));
//
// console.log(array);
// console.log(test);
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// const test = numbers.filter((number) => number % 2 === 0);
//
// console.log(numbers);
//
// console.log(test);
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// const test = numbers.reduce((acc, curr) => acc + curr);
//
// console.log(numbers);
// console.log(test);
// const stirngs = ["apple", "banana", "grapes", "mango", "orange"];
//
// const test = stirngs.map((string) => string.toUpperCase());
//
// console.log(stirngs);
// console.log(test);
//

// const strings = ["apple", "banana", "grapes", "mango", "orange"];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// const test = strings.filter((string) => string.length === 5);

// console.log(strings);
// console.log(test);

// numbers.forEach((number, index) => {
//   numbers[index] = number * 2;
// });
//
const products = [
  {
    name: "Wireless Headphones",
    price: 199.99,
    color: "Black",
  },
  {
    name: "Smart Watch",
    price: 299.99,
    color: "Silver",
  },
  {
    name: "Running Shoes",
    price: 89.99,
    color: "Blue",
  },
  {
    name: "Laptop Backpack",
    price: 49.99,
    color: "Gray",
  },
  {
    name: "Gaming Mouse",
    price: 79.99,
    color: "RGB",
  },
  {
    name: "Coffee Maker",
    price: 129.99,
    color: "White",
  },
  {
    name: "Bluetooth Speaker",
    price: 69.99,
    color: "Red",
  },
  {
    name: "Desk Lamp",
    price: 34.99,
    color: "Bronze",
  },
  {
    name: "Water Bottle",
    price: 24.99,
    color: "Green",
  },
  {
    name: "Wireless Charger",
    price: 39.99,
    color: "Black",
  },
];

// console.log(products);

// const numbers = [2, 31, 12, 3, 6, 19, 9];
//
// console.log(numbers);
//
// const accumulatorDouble = (acc, curr) => {
//   return [...acc, curr * 2];
// };
//
// const double = numbers.reduce(accumulatorDouble, []);
//
// console.log(double);

//   return { ...product, category: product.price > 100 ? "Expensive" : "Cheap" };
// });
//
// console.log(categorizedProducts);
//
// const expensiveProducts = categorizedProducts.filter((product) => {
//   return product.category === "Expensive";
// });
//
// console.log(expensiveProducts);
// console.log(categorizedProducts);
//
