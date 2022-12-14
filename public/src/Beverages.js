const drinks = window.drinks;
const questions = window.questions;

class Beverage {
  constructor(id, name, price, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
  }
}

class StarbucksBeverage extends Beverage {
  constructor(id, name, price, type, image) {
    super(id, name, price, image);
    this.type = type;
  }
}

const dripCoffee = new StarbucksBeverage(
  drinks[0].drinkId,
  drinks[0].name,
  drinks[0].price,
  drinks[0].type,
  drinks[0].image
);

const iceCoffee = new StarbucksBeverage(
  drinks[1].drinkId,
  drinks[1].name,
  drinks[1].price,
  drinks[1].type,
  drinks[1].image
);

const caffèMisto = new StarbucksBeverage(
  drinks[2].drinkId,
  drinks[2].name,
  drinks[2].price,
  drinks[2].type,
  drinks[2].image
);

const starbucksLatteHot = new StarbucksBeverage(
  drinks[3].drinkId,
  drinks[3].name,
  drinks[3].price,
  drinks[3].type,
  drinks[3].image
);

const starbucksLatteIce = new StarbucksBeverage(
  drinks[4].drinkId,
  drinks[4].name,
  drinks[4].price,
  drinks[4].type,
  drinks[4].image
);

const cappuccino = new StarbucksBeverage(
  drinks[5].drinkId,
  drinks[5].name,
  drinks[5].price,
  drinks[5].type,
  drinks[5].image
);

const caffèMochaHot = new StarbucksBeverage(
  drinks[6].drinkId,
  drinks[6].name,
  drinks[6].price,
  drinks[6].type,
  drinks[6].image
);

const caffèMochaIce = new StarbucksBeverage(
  drinks[7].drinkId,
  drinks[7].name,
  drinks[7].price,
  drinks[7].type,
  drinks[7].image
);

const whiteMochaHot = new StarbucksBeverage(
  drinks[8].drinkId,
  drinks[8].name,
  drinks[8].price,
  drinks[8].type,
  drinks[8].image
);

const whiteMochaIce = new StarbucksBeverage(
  drinks[9].drinkId,
  drinks[9].name,
  drinks[9].price,
  drinks[9].type,
  drinks[9].image
);

const caramelMacchiatoHot = new StarbucksBeverage(
  drinks[10].drinkId,
  drinks[10].name,
  drinks[10].price,
  drinks[10].type,
  drinks[10].image
);

const caramelMacchiato = new StarbucksBeverage(
  drinks[11].drinkId,
  drinks[11].name,
  drinks[11].price,
  drinks[11].type,
  drinks[11].image
);

const caffèAmericanoHot = new StarbucksBeverage(
  drinks[12].drinkId,
  drinks[12].name,
  drinks[12].price,
  drinks[12].type,
  drinks[12].image
);
const caffèAmericanoIce = new StarbucksBeverage(
  drinks[13].drinkId,
  drinks[13].name,
  drinks[13].price,
  drinks[13].type,
  drinks[13].image
);

export default class Shop {
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
      customize: "",
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

  getAllBeverages() {
    return this.beverages;
  }

  chooseBeverages(id) {
    this.selected.beverage = this.beverages[id - 1];
    return this.selected.beverage;
  }

  getCustomizes(type) {
    for (const obj of questions) {
      if (obj.type === type) return obj;
    }
  }

  memorizeName(customize) {
    this.selected.customize = this.selected.customize
      ? `${this.selected.customize} ${customize}`
      : customize;

    return `${this.selected.beverage.name} ${this.selected.customize}`;
  }

  calcSum(sum) {
    this.check += sum;
    return this.check;
  }

  checkout() {
    return {
      beverage: `${this.selected.beverage.name} ${this.selected.customize}`,
      check: this.check
    };
  }
}

// const shop = new Shop();
// shop.chooseBeverages(5)
// shop.memorizeName("Short")
// shop.calcSum(100)
// shop.memorizeName("アーモンドミルク")
// shop.calcSum(100)
// console.log(shop.checkout())
