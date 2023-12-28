
function fibononcie(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// console.log(fibononcie(5));

function fibononcie(n) {
    if (n < 2) {
        return n;
    }
    return fibononcie(n - 1) + fibononcie(n - 2);
}

console.log(fibononcie(5));

//////////////////factorial////////////////

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}

// console.log(factorial(5));

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// console.log(factorial(5));




function isPrime(n) {
    if (n <= 1) {
        console.log('ff');
        return false;
    }
    for (let l = 2; l < Math.sqrt(n/2); l++) {
        console.log('dsds');
        if (n % l === 0) {
            console.log('fff');
            return false;
        }
    }
    return true;
}

// console.log(isPrime(9));

// let arr = [1,7,3,2,5];
// let arr = [6,5,4,3,9,8,5];
let sum = 0;


let arr = [6,2,4,6,2,4,9,6];


function sumFind(arr,index = 0) {
    if (index < arr.length) {
        return arr[index] + sumFind(arr,index+1);
    }else{
        return 0;
    }
}


// console.log(sumFind(arr));



function sums(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 10) {
                return {i , j};
            }
        }
    }
    return sum;
}

// function sums(arr) {
//     return arr * (arr+1);
// };

// console.log(sums(arr));