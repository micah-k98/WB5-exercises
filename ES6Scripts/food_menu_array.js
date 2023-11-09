"use strict"

let meal = "2";

let menu = [
    [
        {item: "Sausage and Egg Biscuit", price: 3.69},
        {item: "Bacon and Egg Biscuit", price: 3.49},
        {item: "Ham and Egg Biscuit", price: 3.29}
    ],

    [
        {item: "Philly Roll with Tuna", price: 10.99},
        {item: "T-Bone Steak with mashed potatoes", price: 25.99},
        {item: "Cesar Salad", price: 6.99},
        {item: "White Spaghetti with Garlic Bread", price: 10.99},
    ],

    [
        {item: "Burger and Fries", price: 5.99},
        {item: "House Sandwich and Fries", price: 10.99},
        {item: "T-Bone Steak with mashed potatoes", price: 25.99},
        {item: "Meat Lovers Pizza", price: 12.99},
        {item: "Tonkatsu with Rice and Fried Vegetables", price: 15.99},
    ],
];

let options = [
    {
        name: "Breakfast Menu",
        value: "0"
    },
    {
        name: "Lunch Menu",
        value: "1"
    },
    {
        name: "Dinner Menu",
        value: "2"
    }
];

for (let i = 0; i < options.length; i++)
{
    if (meal == options[i].value)
    {
        console.log(options[i].name);
        console.table(menu[+options[i].value]);
    }
}


