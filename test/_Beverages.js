/* eslint-env mocha */

const { expect } = require("chai");
const Shop = require("../src/Beverages");

describe("Starbucks shop", () => {
  it("should have 14 beverages", () => {
    const shop = new Shop();
    expect(shop.beverages.length).to.equal(14);
  });
  describe("chooseBeverage", () => {
    it("should memorize chosen beverage", () => {
      const shop = new Shop();
      shop.chooseBeverage(1);
      expect(shop.selected.beverage).to.deep.equal({
        "id": "1",
        "name": "ドリップコーヒー (HOT)",
        "price": ["290", "330", "370", "410"],
        "type": ["size", "decaf", "syrup", "source", "whip", "shot"]
      });
    });
  });
  describe("chooseSize", () => {
    it("should choose Beverage's size", () => {
      const shop = new Shop();
      shop.chooseBeverage(1);
      shop.chooseSize(0);
      expect(shop.selected.size).to.equal("Short");
    });
    it("should memorize chosen beverage's price", () => {
      const shop = new Shop();
      shop.chooseBeverage(1);
      shop.chooseSize(3);
      expect(shop.check).to.equal(410);
    });
  });
});
