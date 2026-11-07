function removeDuplicates(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let found = false;

        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            result[result.length] = arr[i];
        }
    }

    return result;
}

let ids = [101, 102, 103, 101, 104, 102];
console.log(removeDuplicates(ids));