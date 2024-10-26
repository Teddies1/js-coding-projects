const fibIter = (n) => {
    if (n === 0){
        return [0];
    }
    if (n === 1){
        return [0, 1];
    }
    var ans = [0, 1];

    for (let i = 2; i < n; i++){
        ans.push(ans[i-2] + ans[i-1]);
    }
    
    return ans
};

const fibRecursive = (n) => {
    
    if (n === 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    // Handle recursion case
    const array = fibRecursive(n - 1);
    array.push(array[array.length - 1] + array[array.length - 2]);
    return array;
};

function mergeSort(arr){
    if (arr.length <= 1) return arr;
    
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let results = [];
    while(i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;  
        }
        else {
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        results.push(arr2[j]);
        j++;
    }
    return results
}

console.log(fibIter(8));
console.log(fibRecursive(8));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));