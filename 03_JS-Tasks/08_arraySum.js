function ArraySum(arr){

    // need to compare the biggest elements with the sum from other elements/ If sum is correct = true; otherwise- false/

    // 01 sorting all of the items on array
    let tempArr = arr.sort((a,b) =>{
        return a-b;
    })

    // 02 marked and remove the last element of array with the name-variable- largest
    let largest = tempArr.pop();

    // 03 complete sum operation- iteration for all elements
    let number = 0;
    tempArr.forEach(item =>(number += item));
    return largest === number;
}

console.log(ArraySum([1,6,4,2,13]));
console.log(ArraySum([1,2,4,34,22]));