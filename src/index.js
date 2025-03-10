function fibs(num) {
    let arr = [];
    let prev = 0;
    let next = 1;
    let output;
    for (let i = 0; i < num; i++) {
        arr.push(prev);
        output = prev + next;
        prev = next;
        next = output;
    }
    return arr;
}

// console.log(fibs(13));

function fibsRec(n) {
    return n === 1 ? [0] : n === 2 ? [0, 1] : [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
}

// console.log(fibsRec(8));

function mergeSort(arr) {
    return arr.toSorted((a, b) => a - b);
}

// console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));