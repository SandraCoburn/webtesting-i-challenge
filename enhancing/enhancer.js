module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  //The item's enhancement increases by 1
  //if the item enhancement level is 20, the enhancement level is not changed.
  //The durability of the item is not changed

  return {
    ...item,
    enhancement:
      item.enhancement <= 20 ? item.enhancement + 1 : item.enhancement,
  };
}

function fail(item) {
  //If the item's enhancement is less than 15, the durability of the item is decreased by 5
  //If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
  //If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
  return {
    ...item,
    enhancement:
      item.enhancement > 16 ? item.enhancement - 1 : item.enhancement,
    durability:
      item.enhancement < 15 ? item.durability - 5 : item.durability - 10,
  };
}

function repair(item) {
  //accepts an item object and returns a new item with the durability restored to 100

  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
