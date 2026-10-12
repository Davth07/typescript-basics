"use strict";
// //* Uppgift 1
// let userName: string = "David";
// let highScore: number = 5000;
// let isLoggedIn: boolean = true;
// let productName: string = "Product";
// let price: number = 4000;
// let isAvailable: boolean = false;
// console.log(userName);
// console.log(highScore);
// console.log(isLoggedIn);
// console.log(productName);
// console.log(price);
// console.log(isAvailable);
//* Uppgift 2
// let playerName: string = "david";
// let score: number = 250;
// let isAlive: boolean = true; // I wrote "yes" instead of true. Deliberate inaccurate value. Should instead be true or false (true), as Typescript is expecting a boolean.
// console.log(playerName);
// console.log(score);
// console.log(isAlive);
//* Uppgift 3
// let productNames: string[] = ["product1", "product2", "product3"];
// let prices: number[] = [200, 500, 149];
// console.log("Product:", productNames[0], "Price:", prices[0]);
// productNames.push("product4");
// prices.push(1200);
// console.log("Product length", productNames.length);
// console.log("Price Length:", prices.length);
//* Exercise 1 - Arrays and Collections
// let students: string[] = ["David T", "Hugo", "Vilhelm", "David LF"];
// console.log(students[0], students[-1]);
// students.push("Alex");
// console.log(students.length);
// students[2] = "Clayton";
// console.log(students);
//* Exercise 2 - Predict and Debug
// let prices: number[] = [20, 30, 50];
// prices.push(10);
// prices[1] = 40;
// console.log(prices.length);
// console.log(prices[1]);
// prices.push("free"); // deliberate type error
//// Typescript expects a number not a string. Therefore an error.
//* Exercise 3 - Array operations
// let tickets: string[] = ["title1", "title2", "title3", "title4"];
// tickets.pop();
// console.log(tickets.includes("title4"));
// console.log(tickets.includes("title2"));
// for (let i = 0; i < tickets.length; i++) {
// 	console.log(tickets[i]);
// }
// console.log(tickets[20]); // shows undefined as the index has no value or item in the array.
//* Exercise 4 - Calculate remaining work
// let remainingHours: number[] = [6, 4, 9, 0];
// let total = 0;
// for (let i = 0; i < remainingHours.length; i++) {
// 	console.log(remainingHours[i]);
// 	total += remainingHours[i];
// }
// console.log("Total:", total);
// let entries = 0;
// for (let i = 0; i < remainingHours.length; i++) {
// 	if (remainingHours[i] > 0) {
// 		entries++;
// 	}
// }
// console.log("Entries (greather than 0):", entries);
//* Exercise 5 - Array extended
let studentsFullNames = [
    ["David", "Thörnqvist"],
    ["Hugo", "Nyberg"],
    ["Vilhelm", "Gustafsson"],
    ["David", "Lövgren Forssén"],
];
console.log(studentsFullNames[0]);
console.log(studentsFullNames[3]);
console.log(studentsFullNames[0][0]);
console.log(studentsFullNames[0][1]);
for (let i = 0; i < studentsFullNames.length; i++) {
    console.log(`${i + 1}.`, studentsFullNames[i]);
}
studentsFullNames.push(["Alex", "Huica"]);
console.log(studentsFullNames.length);
studentsFullNames[2][0] = "William";
console.log(studentsFullNames);
