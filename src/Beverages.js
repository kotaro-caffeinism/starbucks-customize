const fs = require("fs");

const jsonDrinks = fs.readFileSync("./data/beverages.json");
const drinks = JSON.parse(jsonDrinks);

class Beverage {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class StarbucksBeverage extends Beverage {
  constructor(id, name, price, disabled, discount) {
    super(id, name, price);
    this.disabledCustomize = disabled;
    this.discountCustomize = discount ? discount : null;
  }
}

// const beverage1 = new StarbucksBeverage(
//   drinks[0].drinkId,
//   drinks[0].name,
//   drinks[0].price,
//   ["decaf", "form milk"],
//   ["milk"],
// );

// console.log(beverage1);

const dripCoffee = new StarbucksBeverage(
  drinks[0].drinkId,
  drinks[0].name,
  drinks[0].price,
  ["ice", "form milk", "ristretto", "milk", "hot"]
);

const iceCoffee = new StarbucksBeverage(
  drinks[1].drinkId,
  drinks[1].name,
  drinks[1].price,
  ["form milk", "ristretto", "milk", "hot"]
);

const caffèMisto = new StarbucksBeverage(
  drinks[2].drinkId,
  drinks[2].name,
  drinks[2].price,
  ["ice", "ristretto"]
);

const starbucksLatteHot = new StarbucksBeverage(
  drinks[3].drinkId,
  drinks[3].name,
  drinks[3].price,
  ["ice"]
);

const starbucksLatteIce = new StarbucksBeverage(
  drinks[4].drinkId,
  drinks[4].name,
  drinks[4].price,
  ["hot", "form milk"]
);

const cappuccino = new StarbucksBeverage(
  drinks[5].drinkId,
  drinks[5].name,
  drinks[5].price,
  ["ice"]
);

const caffèMochaHot = new StarbucksBeverage(
  drinks[6].drinkId,
  drinks[6].name,
  drinks[6].price,
  ["ice"],
  ["whip", "syrup"]
);

const caffèMochaIce = new StarbucksBeverage(
  drinks[7].drinkId,
  drinks[7].name,
  drinks[7].price,
  ["hot"],
  ["whip", "syrup"]
);

const whiteMochaHot = new StarbucksBeverage(
  drinks[8].drinkId,
  drinks[8].name,
  drinks[8].price,
  ["ice"],
  ["whip", "syrup"]
);

const whiteMochaIce = new StarbucksBeverage(
  drinks[9].drinkId,
  drinks[9].name,
  drinks[9].price,
  ["hot"],
  ["whip", "syrup"]
);

const caramelMacchiatoHot = new StarbucksBeverage(
  drinks[10].drinkId,
  drinks[10].name,
  drinks[10].price,
  ["hot"],
  ["syrup"]
);

const caramelMacchiato = new StarbucksBeverage(
  drinks[11].drinkId,
  drinks[11].name,
  drinks[11].price,
  ["ice", "form milk"],
  ["syrup"]
);

const caffèAmericanoHot = new StarbucksBeverage(
  drinks[12].drinkId,
  drinks[12].name,
  drinks[12].price,
  ["ice", "hot", "form milk", "milk"]
);
const caffèAmericanoIce = new StarbucksBeverage(
  drinks[13].drinkId,
  drinks[13].name,
  drinks[13].price,
  ["hot", "form milk", "milk"]
);

class Shop {
  constructor() {
    this.beverages = [
      dripCoffee,
      iceCoffee,
      caffèMisto,
      starbucksLatteHot,
      starbucksLatteIce,
      cappuccino,
      caffèMochaHot,
      caffèMochaIce,
      whiteMochaHot,
      whiteMochaIce,
      caramelMacchiatoHot,
      caramelMacchiato,
      caffèAmericanoHot,
      caffèAmericanoIce,
    ];

    this.till = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
      1000: 0,
    };
  }
}

const shop = new Shop();
console.log(shop.beverages);

module.exports = Shop;
