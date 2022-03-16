"use strict";
exports.__esModule = true;
var mountains = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    },
];
function findNameOfTallestMountain(mountains) {
    var temp = -Infinity;
    var name = "";
    mountains.forEach(function (mountain) {
        if (temp < mountain.height) {
            temp = mountain.height;
            name = mountain.name;
        }
    });
    return name;
}
var MountainName = findNameOfTallestMountain(mountains);
console.log(MountainName);
var products = [
    {
        name: "3060 TI",
        price: 560
    },
    {
        name: "3070 TI",
        price: 900
    },
    {
        name: "3080 TI",
        price: 1800
    },
];
function calcAverageProductPrice(products) {
    var total = 0;
    products.forEach(function (product) { return total += product.price; });
    return total / products.length;
}
var ProductAverage = calcAverageProductPrice(products);
console.log(ProductAverage);
var inventory = [
    {
        product: {
            name: "motor",
            price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: "sensor",
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: "LED",
            price: 1.00
        },
        quantity: 20.00
    }
];
function calcInventoryValue(inventory) {
    var total = 0;
    inventory.forEach(function (item) { return total += item.product.price * item.quantity; });
    return total;
}
var inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);
