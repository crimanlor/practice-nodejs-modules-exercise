/** Leer README */

const arr = [1, 2, 3];

function getAvgFromArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        total = sum / arr.length;
    }
    return total
}
console.log(getAvgFromArray(arr))