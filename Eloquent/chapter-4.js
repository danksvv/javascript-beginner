// Objects and arrays ... are objects in javascript. They inherit from Object.prototype. They have their own methods and properties that are available to all instances of the object type.

// const arr = [];
// const arr2 = [];
//
// for (let i = 0; i < 10; arr[i] = i++);
// for (let i = 0; i < 10; arr2[i] = ++i);
//
// console.log(arr);
// console.log(arr2);
//
//==============================================================================
//
// const obj = { left: 1, right: 2 };
//
// console.log(obj.left); // 1
// delete obj.left;
// console.log(obj.left); // undefined
// console.log("left" in obj); // false
// console.log("right" in obj); // true
// console.log(Object.keys(obj)); // [ 'right' ]
// let obj2 = { up: 3, down: 4 };
// console.log(Object.assign(obj, obj2)); // { right: 2, up: 3, down: 4 }
//
//==============================================================================
//
// const obj1 = { value: 10 };
// const obj2 = obj1;
// const obj3 = { value: 10 };
//
// console.log(obj1 == obj2); // true
// console.log(obj1 == obj3); // false
//
// obj1.value = 15;
// // the value of obj2 will be changed because obj2 is a reference to obj1
// console.log(obj2.value); // 15
// console.log(obj3.value); // 10

//==============================================================================
//
// Jacques Diary example from the book
//
const JOURNAL = require("./journal");

function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2]),
    )
  );
}

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i];
    index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

console.log(tableFor("pizza", JOURNAL));
console.log(tableFor("brushed teeth", JOURNAL));

console.log(phi(tableFor("pizza", JOURNAL)));
console.log(phi(tableFor("brushed teeth", JOURNAL)));

// through all the events in the journal, calculate the phi value for each event
for (let event of journalEvents(JOURNAL)) {
  console.log(event + ":", phi(tableFor(event, JOURNAL)));
}
console.log("=====================================");
//
for (let event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event, JOURNAL));
  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ":", correlation);
  }
}

console.log("=====================================");

for (let entry of JOURNAL) {
  if (
    entry.events.includes("peanuts") &&
    !entry.events.includes("brushed teeth")
  ) {
    entry.events.push("peanut teeth");
  }
}

console.log(phi(tableFor("peanut teeth", JOURNAL)));
