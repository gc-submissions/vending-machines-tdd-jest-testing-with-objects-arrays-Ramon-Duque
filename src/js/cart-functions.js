function calculateChange (total, payment) {
    if (payment < total)
    return("insufficient")
   return Math.abs(total - payment);

  
}; 

   

module.exports.calculateChange = calculateChange;

function isSufficientPayment (total, payment){
    if (payment < total)
    return(false);

    else if (payment > total)
    return (true)

    else (payment === total)
    return (true)
};

module.exports.isSufficientPayment = isSufficientPayment;


function calculateTotal (itemArray){
   const items =[
    {name: "Jelly", price: 3.50},
    {name: "Bread", price: 2},
    {name: "Eggs", price: 3}
]; 
   let sum = 0
   itemArray.forEach(element =>{
    sum += element.price;
   })

   return(sum);
};

module.exports.calculateTotal = calculateTotal;

function addItem (itemsArray, name, price){
     let obj = {name: name, price: price }
    itemsArray.push(obj);
};

module.exports.addItem = addItem;


function removeItem (itemsArray, index){

itemsArray.splice(index)

}

module.exports.removeItem = removeItem;

