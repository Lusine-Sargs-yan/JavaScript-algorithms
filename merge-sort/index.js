const merge = (leftArray, rightArray) => {
    const results = [];
    while(leftArray.length && rightArray.length) {
        if(leftArray[0] <= rightArray[0]) {
            results.push(leftArray.shift());
        } else {
            results.push(rightArray.shift());
        }
    }

    return [...results, ...leftArray, ...rightArray];
};

const mergeSort = arr => {
    if(arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, middle);
    const rightArray = arr.slice(middle);

    return merge(mergeSort(leftArray), mergeSort(rightArray));

};
console.log(mergeSort([-10, 3, 7, 25, 77, 1, 111]));
console.log(mergeSort([99, -10, 3, 7, 25, 77, 1, 111, 454545, 111111, 8, 2, 2.4, 2.3]));
console.log(mergeSort([5, -22, -7, 5, 11, 55, 5]));

