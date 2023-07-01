const linearSearch = (arr, targetElement) => {
    for(let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if(item === targetElement) return i;
    }

    return -1;
};
console.log(linearSearch([1, 2, 3, 4, 5, 6], 6));
console.log(linearSearch([1, 2, 3, 4, 5, 6], 7));
console.log(linearSearch(['rose', 'violet', 'orchid', 'tulip', 'sunflower', 'lily'], 'violet'));
console.log(linearSearch(['rose', 'violet', 'orchid', 'tulip', 'sunflower', 'lily'], 'tulip'));
console.log(linearSearch(['rose', 'violet', 'orchid', 'tulip', 'sunflower', 'lily'], 'aloe'));