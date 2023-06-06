const quickSort = arr => {
    if(arr.length <= 1) return arr;

    const pivot = arr[arr.length -1];
    const right = [];
    const left = [];
    for(let i = 0; i < arr.length - 1; i++) {
        const item = arr[i];
        if(item <= pivot) {
            left.push(item);
        } else {
            right.push(item);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];

};
console.log(quickSort([7, -17, 22, 11, 5, -3]));
console.log(quickSort([10, 5, 2, 3, 0]));
console.log(quickSort([-10, -55, -2, -3]));