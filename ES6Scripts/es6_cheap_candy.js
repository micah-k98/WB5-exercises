"use strict"

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
];

const lessThan4Dollars = products.filter(p => p.price < 4);
console.log("Which candies costs less than $4.00?");
console.table(lessThan4Dollars);

const hasMM = products.filter(p => p.product.indexOf("M&Ms") != -1);
console.log("Which candies has \"M&M\" in its name?");
console.table(hasMM);

let availableSwedishFish = products.find(function(products) {return products.product == "Swedish Fish"});
if(availableSwedishFish != undefined) availableSwedishFish = "Yes, we have."
else availableSwedishFish = "No, we don't have."
console.log("Do we carry \"Swedish Fish\"?");
console.log("  " + availableSwedishFish);
