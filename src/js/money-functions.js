function formatCurrency (amount){
    
    dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    
    return(dollarUS.format(price));
};

module.exports.formatCurrency = formatCurrency;

function getCoins (cents){
let coins = [{quarter: 0}, {dimes: 0}, {nickel: 0}, {pennies: 0}]
co=[];
while(cents!=0){
    if (cents>=25){
        co.push(quarters++);
        cents = cents-25;
    }
    else if (cents>=10){
        co.push(dimes++);
        cents = cents-10;
    }
    else if (cents>=5){
        co.push(nickels++);
        cents = cents -5;
    }
    // else if (cents>=2){
    //     co.push("2");
    //     cents = cents - 2;
    // }
    else if (cents>=1){
        co.push(pennies++);
        cents = cents - 1;
    }
}
return(co)

};

module.exports.getCoins = getCoins;