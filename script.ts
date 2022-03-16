export{}

//------------------------mountains------------------------
interface Mountain{
    name:string;
    height: number;
}

let mountains : Mountain[] = [
    {
        name:"Kilimanjaro",
        height: 19341
    },
    {
        name:"Everest",
        height: 29029
    },
    {
        name:"Denali",
        height: 20310
    },
];

function findNameOfTallestMountain(mountains : Mountain[]):string{
    let temp:number = -Infinity;
    let name:string ="";
    mountains.forEach((mountain)=> {
        if(temp < mountain.height){
            temp = mountain.height;
            name = mountain.name;
        }
    });
    return name;
}
let MountainName: string = findNameOfTallestMountain(mountains)
console.log(MountainName);



//------------------------products------------------------
interface Product {
    name:string;
    price:number;
}

let products:Product[] = [
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
]

function calcAverageProductPrice(products: Product[]): number{
    let total = 0;
    products.forEach(product => total += product.price);
    return total/products.length;
}
let ProductAverage:number = calcAverageProductPrice(products);
console.log(ProductAverage);



// ------------------------inventory------------------------
interface InventoryItem{
    product:Product;
    quantity:number;
}

let inventory: InventoryItem[] = [
    {
        product:{
            name: "motor",
            price: 10.00
        },
        quantity:10
    },
    {
        product:{
            name: "sensor",
            price: 12.50
        },
        quantity:4
    },
    {
        product:{
            name: "LED",
            price: 1.00
        },
        quantity:20.00
    }
]

function calcInventoryValue(inventory:InventoryItem[]):number{
    let total = 0;
    inventory.forEach(item => total += item.product.price * item.quantity)
    return total;
}

let inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);

