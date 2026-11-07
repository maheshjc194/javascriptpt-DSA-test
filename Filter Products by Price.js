function filterProducts(products, maxPrice) {
    let result = [];

    for (let i = 0; i < products.length; i++) {
        if (products[i].price < maxPrice) {
            result[result.length] = products[i];
        }
    }

    return result;
}

let products = [
    { id: 1, name: "Keyboard", price: 800 },
    { id: 2, name: "Monitor", price: 5000 }
];

console.log(filterProducts(products, 1000));