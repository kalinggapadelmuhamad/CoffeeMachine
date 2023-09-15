// const { coffeeStock, isCoffeeMachineReady } = require("./state");
import { coffeeStock as stock, isCoffeeMachineReady } from "./state.js";
import _ from "loadsh";

// const makeCoffee = (type, milligram) => {
//   if (coffeeStock[type] >= milligram) {
//     console.log("Kopi berhasil dibuat!");
//   } else {
//     console.log("Biji kopi habis!");
//   }
// };

// const displayStock = (stock) => {
//   for (const type in stock) {
//     console.log(type);
//   }
// };

// makeCoffee("robusta", 80);
// displayStock(coffeeStock);

// console.log(stock);
// console.log(isCoffeeMachineReady);

// console.log("Selamat datang!");

// setTimeout(() => {
//   console.log("Terima kasih sudah mampir, silakan datang kembali!");
// }, 3000);

// console.log("Ada yang bisa dibantu?");

const myArray = [1, 2, 3, 4, 5];
const sum = _.sum(myArray);
console.log(sum);
