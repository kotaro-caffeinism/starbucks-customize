/* eslint-env mocha */

const { expect } = require("chai");
const Shop = require("../src/Beverages");

describe("Starbucks shop", () => {
  it("should have 14 beverages", () => {
    const shop = new Shop();
    expect(shop.beverages.length).to.equal(14);
  });
});
