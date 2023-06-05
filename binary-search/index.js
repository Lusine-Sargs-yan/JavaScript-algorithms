const binarySearch = (arr, targetElement) => {
    let rightIndex = arr.length - 1;
    let leftIndex = 0;
    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor(rightIndex - leftIndex / 2);
        if(targetElement === arr[middleIndex]) {
            return middleIndex;
        }
        if(targetElement < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }

    }

    return -1;
};
console.log(binarySearch([2,4,7,9,10,13,20], 13));
console.log(binarySearch([2,4,7,9,10,13,20], 7));
console.log(binarySearch([2,4,7,9,10,13,20], 2));
console.log(binarySearch([2,4,7,9,10,13,20], 133));

