/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let t1 = Date.now();
    let sum1 = 0;
    for(let i = 1 ; i<=n; i++){
        sum1+=i;
    }
    let t2 = Date.now();
    let diff = t2-t1;
    console.log(diff)
}
calculateTime(100)
calculateTime(100000)
calculateTime(1000000000)
function calculateTime2(n){
    let t1 = Date.now();
    let sum = (n*(n+1))/2;
    let t2 = Date.now();

    console.log(t2-t1)
    console.log(sum)
}
calculateTime2(100000000000000000000000000000000000000000000000000000000000000000)