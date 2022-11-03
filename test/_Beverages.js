/* eslint-env mocha */

const { expect } = require("chai");
const Shop = require("../src/Beverages");

describe("Starbucks shop", () => {
  it("should have 14 beverages", () => {
    const shop = new Shop();
    expect(shop.beverages.length).to.equal(14);
  });
  describe("getAllBeverage", () => {
    it("should return all beverage", () => {
      const shop = new Shop();
      expect(shop.getAllBeverage().length).to.equal(14);
      expect(shop.getAllBeverage()[0].name).to.equal("ドリップコーヒー (HOT)");
    });
  });
  describe("chooseBeverage", () => {
    it("should memorize chosen beverage", () => {
      const shop = new Shop();
      expect(shop.chooseBeverage(1)).to.deep.equal({
        id: "1",
        name: "ドリップコーヒー (HOT)",
        price: ["290", "330", "370", "410"],
        type: ["size", "decaf", "syrup", "source", "whip", "shot"],
      });
      expect(shop.selected.beverage).to.deep.equal({
        id: "1",
        name: "ドリップコーヒー (HOT)",
        price: ["290", "330", "370", "410"],
        type: ["size", "decaf", "syrup", "source", "whip", "shot"],
      });
    });
  });
  describe("getCustomize", () => {
    it("should choose Beverage's size", () => {
      const shop = new Shop();
      const beverage = shop.chooseBeverage(1);
      const customizeTypes = beverage.type;

      expect(shop.getCustomize(customizeTypes[0])).to.deep.equal({
        type: "size",
        choices: [
          "Short サイズ",
          "Tall サイズ",
          "Grande サイズ",
          "Venti サイズ",
        ],
        name: ["Short", "Tall", "Grande", "Venti"],
        nameOder: 1,
      });

      expect(shop.getCustomize(customizeTypes[1])).to.deep.equal({
        type: "decaf",
        choices: ["変更しない", "ディカフェに変更する"],
        name: ["", "ディカフェ"],
        nameOder: 2,
        price: [0, 50],
      });
    });
  });
});
