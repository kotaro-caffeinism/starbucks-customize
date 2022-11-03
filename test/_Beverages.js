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
    })
  })
  describe("chooseBeverage", () => {
    it("should memorize chosen beverage", () => {
      const shop = new Shop();
      expect(shop.chooseBeverage(1)).to.deep.equal({
        "id": "1",
        "name": "ドリップコーヒー (HOT)",
        "price": ["290", "330", "370", "410"],
        "type": ["size", "decaf", "syrup", "source", "whip", "shot"]
      });
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
      expect(shop.chooseSize(0)).to.equal("Short");
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
