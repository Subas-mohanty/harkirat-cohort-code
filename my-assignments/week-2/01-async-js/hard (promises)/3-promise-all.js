/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    let t1 = new Promise((resolve)=>{
        setTimeout(()=> resolve(), t*1000);
    })
    return t1;
}

function wait2(t) {
    let t2 = new Promise((resolve)=>{
        setTimeout(()=> resolve(), t*1000);
    })
    return t2;
}

function wait3(t) {
    let t3 = new Promise((resolve)=>{
        setTimeout(()=> resolve(), t*1000);
    })
    return t3;
}

function calculateTime(t1, t2, t3) {
    return Promise.all([t1,t2,t3]).then(()=>{
        return Math.max(t1*1000,t2*1000,t3*1000)
    })

}

module.exports = calculateTime;
