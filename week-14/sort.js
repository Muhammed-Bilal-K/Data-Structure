let arr = [64, 34, 25, 12, 22, 11, 90,34,653,5642,56,43,65,3,67,3,5];

//bubbleSort
function bubblesort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    console.log('bs');
    return arr;
}

//insertionSort
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >=0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    console.log('is');
    return arr;
}

//selectionSort
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];
        }
    }
    console.log('ss');
    return arr;
}


//quickSort
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let right = [];
    let left = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    console.log('qs');
    return [...quickSort(left),pivot,...quickSort(right)];
}

//mergeSort
function mergeSort(arr){
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left,right);
}

function merge(left,right) {
    let sortarr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortarr.push(left.shift());
        }else{
            sortarr.push(right.shift());
        }
    }
    return [...sortarr,...left,...right];
}

console.log(mergeSort(arr));

