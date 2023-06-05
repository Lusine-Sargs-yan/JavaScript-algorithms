const bubbleSort = arr => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};
console.log(bubbleSort([7, -17, 22, 11, 5, -3]));
console.log(bubbleSort([10, 5, 2, 3, 0]));
console.log(bubbleSort([-10, -55, -2, -3]));
console.log(bubbleSort([-11210, -55, -5452, -3]));

