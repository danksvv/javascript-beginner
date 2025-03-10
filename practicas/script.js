"use strict";
//
// const students = [
//   { name: "Alex", lastName: "Bauer", age: 33, gender: "male", city: "Berlin" },
//   {
//     name: "Eva",
//     lastName: "Meier",
//     age: 26,
//     gender: "female",
//     city: "Hamburg",
//   },
//   {
//     name: "Linda",
//     lastName: "Meyer",
//     age: 25,
//     gender: "female",
//     city: "Berlin",
//   },
//   {
//     name: "Max",
//     lastName: "Mustermann",
//     age: 18,
//     gender: "male",
//     city: "Hamburg",
//   },
//   { name: "John", lastName: "Doe", age: 21, gender: "male", city: "Hessen" },
//   {
//     name: "Jill",
//     lastName: "Smith",
//     age: 19,
//     gender: "female",
//     city: "Dortmund",
//   },
//   {
//     name: "Andreas",
//     lastName: "Mueller",
//     age: 39,
//     gender: "male",
//     city: "Berlin",
//   },
// ];
//
// forEach
// const studentsName = [];
//
// students.forEach((student) => {
//   studentsName.push(student.name);
// })
//
// console.log(studentsName);
//
//
// const fullName = students.map((student) => {
//   return {
//     ...student,
//     fullName: student.name + ' ' + student.lastName,
//   }
// });
//
// const years_to_retire = fullName.map((student) => {
//   return {
//     ...student,
//     yearsToRetire: 65 - student.age
//   }
// });
//
// console.log(years_to_retire);
//
// const ageOlder = students.filter((student) => {
//   return student.age > 25
// }).filter((student) => {
//   return student.city === 'Berlin';
// });
//
//
// const account = {
//   number: "0323443254216532",
//   amount: 0,
//   deposit(amount) {
//     return (this.amount += amount);
//   },
//   withdraw(amount) {
//     return (this.amount -= amount);
//   },
// };
//
// account.deposit(100);
// account.withdraw(50);
// console.log(account.amount);
//
// const user = {
//   name: "Alex",
//   lastName: "Bauer",
//   age: 33,
//   gender: "male",
//   city: "Berlin",
//   showFullName() {
//     return this.name + " " + this.lastName;
//   },
// };
//
// // Objects Constructor
//
// function Person() {
//   this.name = "";
//   this.lastName = "";
//   this.age = 0;
//   this.gender = "";
//   this.city = "";
//   this.showFullName = function () {
//     return this.name + " " + this.lastName;
//   };
// }
//
// const user2 = new Person();
//
// user2.name = "John";
// user2.lastName = "Doe";
// user2.age = 21;
// user2.gender = "male";
// user2.city = "Hessen";
//
// console.log(user2);
// console.log(user2.showFullName());
//
// function Person() {
//   this.name = "";
//   this.lastName = "";
//   this.age = 0;
//   this.gender = "";
//   this.city = "";
//   this.showFullName = function () {
//     return this.name + " " + this.lastName;
//   };
// }
//
// let person1 = new Person();
// let person2 = new Person();
//
// person1.name = "John";
// person1.lastName = "Doe";
// person1.age = 21;
// person1.gender = "male";
// person1.city = "Hessen";
//
// console.log(person1);
// console.log(person2);
//
// class Company {
//   constructor(name) {
//     let employees = [];
//     this.name = name;
//
//     this.getEmployees = function () {
//       return employees;
//     };
//
//     this.addEmployee = function (employee) {
//       employees.push(employee);
//     };
//   }
// }
//
// const company = new Company("ACME");
//
// console.log(company);
// company.addEmployee("John");
// company.addEmployee("Eva");
// company.addEmployee("Max");
//
// console.log(company.getEmployees());
//
//
//class Person {
//  constructor(name, lastName) {
//    this.name = name;
//    this.lastName = lastName;
//  }
//}
//
//class Programmer extends Person {
//  constructor(name, lastName, language) {
//    super(name, lastName);
//    this.language = language;
//  }
//}
//
//let person = new Person("John", "Doe");
//let programmer = new Programmer("Ana", "Armas", "Javascript");
//
//console.log(person);
//console.log(programmer);
//
// // sobrecarga de parametros
// function sum(a = 0, b = 0, c = 0) {
//   return a + b + c;
// }
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3));
// console.log(sum(123));
//
// class Stack {
//   constructor() {
//     this.items = [];
//     this.add = (item) => {
//       this.items.push(typeof item);
//     };
//   }
// }
//
// let stack1 = new Stack();
// let stack2 = new Stack();
//
// stack1.add(1);
// stack1.add("hello world");
// stack1.add(true);
// stack1.add(3.14);
// stack1.add(null);
// console.log(stack1);

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log(" Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  }
  console.log(i);
}
