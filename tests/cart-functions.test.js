const {calculateChange, isSufficientPayment, calculateTotal, addItem, removeItem, formatCurrency}= require('../src/js/cart-functions');

describe("calculateChange", () => {
  test("Given total 5 and payment 6, it returns 1.", function(){

     //arrange
     let total = 5
     let payment = 6
     //act
     const diff = calculateChange(total, payment);
     //assert
     expect(diff).toEqual(1);

  });

  test("given total 12.30 and payment 13.03, returns 0.73", function(){

    //arrange
    let total = 12.30
    let payment = 13.03
    //act
    const diff = calculateChange(total, payment);
    //assert
    expect(diff).toBeCloseTo(0.73);

 });

  test("if payment is insufficient", function(){

  //arrange
  let total = 13
  let payment = 12
  //act
  const diff = calculateChange(total, payment);
  //assert
  expect(diff).toBe("insufficient");

});  
});

describe("isSufficientPayment", () => {
  test("given total 5 and payment 6, returns true", function (){

      //arrange
      let total = 5
      let payment = 6

      //act
      const diff = isSufficientPayment(total, payment);

      //assert
      expect(diff).toBe(true)
  });

  test("given total 10 and payment 7 returns false", function (){

    //arrange
    let total = 10
    let payment = 7

    //act
    const diff = isSufficientPayment(total, payment);

    //assert
    expect(diff).toBe(false)
});

test("given total of 3, and payment of 3 return true", function (){

  //arrange
  let total = 3
  let payment = 3

  //act
  const diff = isSufficientPayment(total, payment);

  //assert
  expect(diff).toBe(true)
});


});

describe("calculateTotal", () => {
  test("Given an itemsArray of one item with price 4.99, it returns 4.99", function(){

    //arrange
    let itemArray = [{name: "spam", price: 4.99}]

    //act
    const result = calculateTotal(itemArray);

    //assert
    expect(result).toBe(4.99);

  });

  test("Given an itemsArray of three items with prices 3.50, 12.99, and 0.03, it returns 16.52", function(){

    //arrange
    let itemArray = 
    [{name: "spam", price: 3.50},
     {name: "bread", price: 12.99},
     {name: "eggs", price: 0.03}
  ]

    //act
    const result = calculateTotal(itemArray);

    //assert
    expect(result).toBeCloseTo(16.52);
  });

  test("Given an empty itemsArray, it returns 0", function(){

    //arrange
    let itemArray = []

    //act
    const result = calculateTotal(itemArray);

    //assert
    expect(result).toBe(0);
  });
});

describe("addItem", () => {
  test("Call addItem with an empty itemsArray, name Beans and price 3. Then check that itemsArray has one item in it: { name: Beans, price: 3 }", function (){

    //arrange
    let itemsArray = [];
    let name = "grapes";
    let price = 3;
    //act
    addItem(itemsArray, name, price);
    //assert
    // expect(itemsArray.length).toEqual(2)
    expect(itemsArray[0]).toEqual({name: "grapes", price: 3})



  });

  test("Create an itemsArray with one item in it: { name: Beans, price: 3 }. Call addItem with itemsArray, name Sugar and price 2. Then check that itemsArray has two items in it: { name: Beans, price: 3 } and { name: Sugar, price: 2 }", function (){

    //arrange
    let itemsArray = [{name: "Beans", price: 3}];
    let name = "grapes";
    let price = 3;
    //act
    addItem(itemsArray, name, price);
    //assert
    expect(itemsArray.length).toEqual(2)
    // expect(itemsArray[1]).toEqual({name: "grapes", price: 3})



  });

  test("Add another test starting with an array of three items", function (){

    //arrange
    let itemsArray = [{name: "Beans", price: 3}, {name: "bread", price: 2}, {name: "eggs", price: 3}];
    let name = "grapes";
    let price = 3;
    //act
    addItem(itemsArray, name, price);
    //assert
    expect(itemsArray.length).toEqual(4)
    // expect(itemsArray[1]).toEqual({name: "grapes", price: 3})



  });
});

describe("removeItem", () => {
  test("Remove the first element from an array of three items", function () {

      //arrange
      let itemsArray = [{names: "Bread", price: 1.00}, {names: "Eggs", price: 2.00}, {names: "Juice", price: 3.00}]
       let index = 0
        //act
       removeItem(itemsArray, index);
        //assert
        expect(itemsArray.legth).toEqual(2)


  });
});




