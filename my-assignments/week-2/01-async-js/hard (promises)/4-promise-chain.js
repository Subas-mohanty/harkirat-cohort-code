/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    let t1 = new Promise((resolve)=>{
        setTimeout(()=> resolve(t*1000), t*1000);
    })
    return t1;
}

function wait2(t) {
    let t2 = new Promise((resolve)=>{
        setTimeout(()=> resolve(t*1000), t*1000);
    })
    return t2;
}

function wait3(t) {
    let t3 = new Promise((resolve)=>{
        setTimeout(()=> resolve(t*1000), t*1000);
    })
    return t3;
}

function calculateTime(t1, t2, t3) {
    let ans = t1.then().t2.then().t3.then()
    return ans;
}

module.exports = calculateTime;
