class DateClass{
    constructor(){

    }
    // this can be static also
    getTime(){
        return new Date().toLocaleTimeString();
    }
}

const date = new DateClass();

const time = date.getTime();
console.log(time);

// when the function is static
// console.log(DateClass.getTime())