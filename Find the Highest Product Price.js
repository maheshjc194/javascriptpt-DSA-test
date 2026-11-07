function highestPrice(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

let prices = [499, 999, 299, 1499, 799];
console.log(highestPrice(prices));