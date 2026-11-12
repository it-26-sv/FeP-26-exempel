
/*
const names =  [ "Kaffe", "Munk", "Glass" ];
const prices = [  3,  3.5, 4 ];
const stock =  [  100, 15, 45 ];   */

const products =  [ 
    { name: "Kaffe", price: 3, stock: 100}, 
    { name: "Munk", price: 3.5, stock: 15}, 
    { name: "Glass", price: 4, stock: 45}
];

console.log(`${products[0].name} kostar ${products[0].price} €`);
products[0].price = 5;
console.log(`${products[0].name} kostar ${products[0].price} €`);

/**
 * for-loop
 */
let output = "for:\n";
for (let i = 0; i < products.length; i++) {
    output += `${i}: ${products[i].name} kostar ${products[i].price} €\n`;
}
console.log(output);

/** 
 * for...of 
 * */
output = "for...of:\n";
for (const prod of products) {
    output += `${prod.name} kostar ${prod.price} €\n`;
}
console.log(output);

/**
 * forEach()
 */
output = "forEach():\n";
products.forEach(prod => {
    output += `${prod.name} kostar ${prod.price} €\n`;
});
console.log(output);

/**
 * forEach() med numerering
 */
output = "forEach() med index:\n";
products.forEach((prod, i) => {
    output += `${i}: ${prod.name} kostar ${prod.price} €\n`;
});
console.log(output);
