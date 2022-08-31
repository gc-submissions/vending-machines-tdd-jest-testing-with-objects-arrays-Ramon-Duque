const {formatCurrency, getCoins} = require("../src/js/money-functions")

describe("formatCurrency", () =>{

  test("Given the amount 0, it returns $0.00", function() {

      //arrange
      let amount = 0
      //act
      const result = formatCurrency(amount);
      //assert
      expect(result).toBe("$0.00")
      

  })


})

describe("getCoins", () => {
  test("32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2", function(){

    //arrange
    let cents = 32
    //act
    const result = getCoins(cents)
    //assert
    expect(result).toBe("{quarter: 1, dimes: 0, nickels: 1, pennies: 2}")
  });
});