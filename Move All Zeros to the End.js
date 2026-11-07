function moveZeros(arr) {
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[index] = arr[i];
            index++;
        }
    }

    while (index < arr.length) {
        arr[index] = 0;
        index++;
    }

    return arr;
}

let numbers = [0, 5, 0, 3, 8, 0, 2];
console.log(moveZeros(numbers));