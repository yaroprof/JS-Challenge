function mathSequences (arr){

    // 01 create empty array for adding next data
    let arith = [];
    let geo = [];
    // 02 checking data through the loop
    for(let i = 1; i < arr.length; i++){
        let num1 = arr[i] - arr[i-1];
        arith.push(num1);

        let num2 = arr[i] / arr[i-1];
        geo.push(num2);
}
    console.log(`A: ${arith}`)
    console.log(`G: ${geo}`)

}

console.log(mathSequences([2,4,6,8]));
console.log(mathSequences([3,9,27]));