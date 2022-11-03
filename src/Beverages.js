const fs = require("fs");

const jsonDrinks = fs.readFileSync("./data/beverages.json");
const drinks = JSON.parse(jsonDrinks);

const jsonQuestions = fs.readFileSync("./data/questions.json");
const questions = JSON.parse(jsonQuestions);

class Beverage {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class StarbucksBeverage extends Beverage {
  constructor(id, name, price, type) {
    super(id, name, price);
    this.type = type;
  }
}

const dripCoffee = new StarbucksBeverage(
  drinks[0].drinkId,
  drinks[0].name,
  drinks[0].price,
  drinks[0].type,
);

const iceCoffee = new StarbucksBeverage(
  drinks[1].drinkId,
  drinks[1].name,
  drinks[1].price,
  drinks[1].type,
);

const caffèMisto = new StarbucksBeverage(
  drinks[2].drinkId,
  drinks[2].name,
  drinks[2].price,
  drinks[2].type,
);

const starbucksLatteHot = new StarbucksBeverage(
  drinks[3].drinkId,
  drinks[3].name,
  drinks[3].price,
  drinks[3].type,
);

const starbucksLatteIce = new StarbucksBeverage(
  drinks[4].drinkId,
  drinks[4].name,
  drinks[4].price,
  drinks[4].type,
);

const cappuccino = new StarbucksBeverage(
  drinks[5].drinkId,
  drinks[5].name,
  drinks[5].price,
  drinks[5].type,
);

const caffèMochaHot = new StarbucksBeverage(
  drinks[6].drinkId,
  drinks[6].name,
  drinks[6].price,
  drinks[6].type,
);

const caffèMochaIce = new StarbucksBeverage(
  drinks[7].drinkId,
  drinks[7].name,
  drinks[7].price,
  drinks[7].type,
);

const whiteMochaHot = new StarbucksBeverage(
  drinks[8].drinkId,
  drinks[8].name,
  drinks[8].price,
  drinks[8].type,
);

const whiteMochaIce = new StarbucksBeverage(
  drinks[9].drinkId,
  drinks[9].name,
  drinks[9].price,
  drinks[9].type,
);

const caramelMacchiatoHot = new StarbucksBeverage(
  drinks[10].drinkId,
  drinks[10].name,
  drinks[10].price,
  drinks[10].type,
);

const caramelMacchiato = new StarbucksBeverage(
  drinks[11].drinkId,
  drinks[11].name,
  drinks[11].price,
  drinks[11].type,
);

const caffèAmericanoHot = new StarbucksBeverage(
  drinks[12].drinkId,
  drinks[12].name,
  drinks[12].price,
  drinks[12].type,
);
const caffèAmericanoIce = new StarbucksBeverage(
  drinks[13].drinkId,
  drinks[13].name,
  drinks[13].price,
  drinks[13].type,
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
    this.selected = {
      beverage: undefined,
      size: undefined,
    };
    this.check = 0;
    this.till = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
      1000: 0,
    };
  }

  getAllBeverage() {
    return this.beverages;
  }

  chooseBeverage(id) {
    this.selected.beverage = this.beverages[id - 1];
    return this.selected.beverage;
  }

  chooseSize(size) {
    // console.log(sizeName)
    this.selected.size = questions[0].name[size];
    this.check = +this.selected.beverage.price[size];
    return this.selected.size;
  }
}

module.exports = Shop;
