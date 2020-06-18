const { repair, succeed, fail } = require("./enhancer.js");
// test away!

const itemTest = {
  name: "nameTest",
  enhancement: 10,
  durability: 80,
};

const Item2Test = {
  name: "nameTest2",
  enhancement: 0,
  durability: 10,
};

const item3Test = {
  name: "nameTest3",
  enhancement: 16,
  durability: 50,
};
describe("enhancer", () => {
  it("should run test using it()", () => {
    expect(true).toBe(true);
    expect(true).toBeTruthy();
    expect(true).not.toBeUndefined();
  });
});
describe("repair", () => {
  test("Should repair enhancement to 100", () => {
    const expected = { ...itemTest, durability: 100 };
    const actual = repair(itemTest);
    expect(actual).toEqual(expected);
  });
  describe("succes", () => {
    test("The itme enhancement increses by 1", () => {
      const expected = { ...itemTest, enhancement: 11 };
      const actual = succeed(itemTest);
      expect(actual).toEqual(expected);
    });
    describe("fail", () => {
      test("Fail method rules", () => {
        const expected = { ...itemTest, enhancement: 10, durability: 75 };
        const actual = fail(itemTest);
        expect(actual).toEqual(expected);
      });
    });
  });
});
