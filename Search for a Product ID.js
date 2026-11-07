function searchProduct(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
}

let ids = [101, 102, 103, 104, 105];
console.log(searchProduct(ids, 103));