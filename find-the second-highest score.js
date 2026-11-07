function secondHighest(arr) {
    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        }
        else if (arr[i] > second && arr[i] !== first) {
            second = arr[i];
        }
    }

    return second === -Infinity ? null : second;
}

let scores = [45, 80, 90, 65, 90, 70];
console.log(secondHighest(scores));