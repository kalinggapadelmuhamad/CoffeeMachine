const coffeeStock = require("./state");

const makeCoffee = (type, milligram) => {
  if (coffeeStock[type] >= milligram) {
    console.log("Kopi berhasil dibuat!");
  } else {
    console.log("Biji kopi habis!");
  }
};

makeCoffee("robusta", 80);
