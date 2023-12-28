let arr = [-5, 2, 4, 6, 10];

// arr.sort((a, b) => a - b);

// let low = 0;
// let high = arr.length - 1;
let target = 10;


// while (low <= high) {
//     let mid = Math.floor((low + high) / 2)
//     if (arr[mid] == target) {
//         console.log(target, mid );
//         return;
//     }

//     if (arr[mid] < target) {
//         console.log('down');
//         low = mid + 1;
//     }

//     if (arr[mid] >  target) {
//         console.log('up');
//         high = mid - 1;
//     }
// }


//////////////////Linear search////////////////

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        console.log(arr[i]);
        return;
    }
}