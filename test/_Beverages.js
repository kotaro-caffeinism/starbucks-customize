/* eslint-env mocha */

import { expect } from "chai";
import Shop from "../public/src/Beverages.js";

describe("Starbucks shop", () => {
  it("should have 14 beverages", () => {
    const shop = new Shop();
    expect(shop.beverages.length).to.equal(14);
  });
  describe("getAllBeverages", () => {
    it("should return all beverage", () => {
      const shop = new Shop();
      expect(shop.getAllBeverages().length).to.equal(14);
      expect(shop.getAllBeverages()[0].name).to.equal("ドリップコーヒー (HOT)");
    });
  });
  describe("chooseBeverages", () => {
    it("should memorize chosen beverage", () => {
      const shop = new Shop();
      expect(shop.chooseBeverages(1)).to.deep.equal({
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
  describe("getCustomizes", () => {
    it("should choose Beverage's size", () => {
      const shop = new Shop();
      const beverage = shop.chooseBeverages(1);
      const customizeTypes = beverage.type;

      expect(shop.getCustomizes(customizeTypes[0])).to.deep.equal({
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

      expect(shop.getCustomizes(customizeTypes[1])).to.deep.equal({
        type: "decaf",
        choices: ["変更しない", "ディカフェに変更する"],
        name: ["", "ディカフェ"],
        nameOder: 2,
        price: [0, 50],
      });
    });
  });
  describe("memorizeName", () => {
    it("should memorize drink and customize", () => {
      const shop = new Shop();
      shop.chooseBeverages(1);
      expect(shop.memorizeName("Short")).to.equal(
        "ドリップコーヒー (HOT) Short"
      );
      expect(shop.memorizeName("ディカフェ")).to.equal(
        "ドリップコーヒー (HOT) Short ディカフェ"
      );
    });
  });
  describe("calcSum", () => {
    it("should calc Sum", () => {
      const shop = new Shop();
      shop.chooseBeverages(1);
      expect(shop.calcSum(290)).to.equal(290);
      expect(shop.calcSum(50)).to.equal(340);
    });
  });
});
