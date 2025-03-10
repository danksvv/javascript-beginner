// prototype inheritance : In programming, inheritance refers to passing down characteristics from a parent to a child so that a new piece of code can reuse and build upon the features of an existing one. JavaScript implements inheritance by using objects. Each object has an internal link to another object called its prototype.
// prototype : is a delegation link between objects. It is a reference to another object that is used to look up properties that are not found on the object itself.
//
//

const cheff = {
  type: "basic kitchen",
  cook: function (dish) {
    console.log("cooking", dish);
  },
  presentation: function () {
    console.log("Hello i am a", this.type, "cheff");
  },
};

const user = {
  name: "John",
  age: 30,
  profession: "developer",
  type: "frontend",
};

// connect the user object to the cheff object
// delegation of the objescts is done by prototype

//user.__proto__ = cheff; // not recommended to use __proto__ directly
Object.setPrototypeOf(user, cheff); // not recommended to use setPrototypeOf directly

console.log(user.name);
console.log(user.type);
user.cook("pasta");

cheff.cut = function (vegetable) {
  console.log("cutting", vegetable);
};
user.cut("onion");

// examples of prototype

const bruce = { name: "Bruce" };
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
const regexp = /\d+/g;
const date = new Date();
console.log(Object.prototype.toString === bruce.toString); // true
console.log(Object.prototype.numbers === sum.numbers); // true
console.log(bruce.toString === user.toString); // true

// Object.prototype is the top of the prototype chain. It is the object that all objects inherit from. It has a toString method that returns a string representation of the object. The toString method is available on all objects because all objects inherit from Object.prototype.
// array.prototype, date.prototype, RegExp.prototype, etc... are all objects that inherit from Object.prototype. They have their own methods and properties that are available to all instances of the object type.

user.cook = function () {
  console.log("i don't cook 😞");
};

user.cook();
user.presentation(); // always this refers to the object implicitly calling the function in this case user object is calling the function

// ways to use prototypes in javascript
//
// 1. Objects literals
// const obj = { key: value };
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, num) => acc + num, 0);
//
// 2. obejct.create method
// const obj = Object.create(prototype);
//
// 3. constructor functions
// function Person(name) {
//  this.name = name;
//  this.sayName = function() {
//  console.log(this.name);
//  };
//
// 4. objects prototypes not recommended
// obj.__proto__ = prototype;
// Object.setPrototypeOf(obj, prototype);
//
