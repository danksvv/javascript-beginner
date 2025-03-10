const SCRIPTS = require("./scripts.js");
//
// function filter(arr, test) {
//   let passed = [];
//   for (let element of arr) {
//     if (test(element)) {
//       passed.push(element);
//     }
//   }
//   return passed;
// }

// console.log(filter(SCRIPTS, (script) => script.living));
//
// console.log(SCRIPTS.filter((s) => s.direction == "ttb"));
//
// console.log(SCRIPTS.filter((s) => s.direction == "ltr").map((s) => s.name));
//
// ==============================================================================
//

// function reduce(arr, combine, start) {
//   let current = start;
//   for (let element of arr) {
//     current = combine(current, element);
//   }
//   return current;
// }
//
// console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
//
// ==============================================================================
//

// function characterCount(script) {
//   return script.ranges.reduce((count, [from, to]) => {
//     return count + (to - from);
//   }, 0);
// }
//
// console.log(
//   SCRIPTS.reduce((a, b) => {
//     return characterCount(a) < characterCount(b) ? b : a;
//   }),
// );
//
// ==============================================================================

// function average(array) {
//   return array.reduce((a, b) => a + b) / array.length;
// }
//
// console.log(
//   Math.round(average(SCRIPTS.filter((s) => s.living).map((s) => s.year))),
// );
//
// console.log(
//   Math.round(average(SCRIPTS.filter((s) => !s.living).map((s) => s.year))),
// );
//
// ==============================================================================

// function characterScript(code) {
//   for (let script of SCRIPTS) {
//     if (script.ranges.some(([from, to]) => code >= from && code < to)) {
//       return script;
//     }
//   }
//   return null;
// }
//
// console.log(characterScript(121));
//
//==============================================================================
//

// const emojis = "🐧📚🔥👍🏽🍕🎉";
//
// for (let i = 0; i < emojis.length; i++) {
//   console.log(emojis.codePointAt(i));
// }

// console.log(emojis.length);
//
// ==============================================================================
//

// function countBy(items, groupName) {
//   let counts = [];
//   for (let item of items) {
//     let name = groupName(item);
//     let known = counts.findIndex((c) => c.name == name);
//     if (known == -1) {
//       counts.push({ name, count: 1 });
//     } else {
//       counts[known].count++;
//     }
//   }
//   return counts;
// }

// console.log(countBy([1, 2, 3, 4, 5, 1], (n) => n > 2));
//
// ==============================================================================
//
//
// function characterScript(code) {
//   for (let script of SCRIPTS) {
//     if (script.ranges.some(([from, to]) => code >= from && code < to)) {
//       return script;
//     }
//   }
//   return null;
// }
//
// function countBy(items, groupName) {
//   let counts = [];
//   for (let item of items) {
//     let name = groupName(item);
//     let known = counts.findIndex((c) => c.name == name);
//     if (known == -1) {
//       counts.push({ name, count: 1 });
//     } else {
//       counts[known].count++;
//     }
//   }
//   return counts;
// }
//
// function textScripts(text) {
//   let scripts = countBy(text, (char) => {
//     let script = characterScript(char.codePointAt(0));
//     return script ? script.name : "none";
//   }).filter(({ name }) => name != "none");
//
//   let total = scripts.reduce((n, { count }) => n + count, 0);
//   if (total == 0) return "No scripts found";
//
//   return scripts
//     .map(({ name, count }) => {
//       return `${Math.round((count * 100) / total)}% ${name}`;
//     })
//     .join(", ");
// }
//
// console.log(textScripts("英国的狗说woof, 俄罗斯的狗说тяв"));
//
// ==============================================================================
//

// const arrays = [[1, 2, 3], [4, 5], [6]];
//
// const flat = arrays.reduce((a, b) => a.concat(b), []);
//
// console.log(flat);

// ==============================================================================
//
// function loop(value, test, update, body) {
//   for (let i = value; test(i); i = update(i)) {
//     body(i);
//   }
// }
//
// loop(
//   3,
//   (n) => n > 0,
//   (n) => n - 1,
//   console.log,
// );
