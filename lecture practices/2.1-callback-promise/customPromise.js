class myPromise {
  constructor(fn) {
    this.resolve = this.resolve.bind(this);
    fn(this.resolve);
  }

  resolve(val) {
    this.value = val;
  }
  then(fn) {
    return new myPromise((resolve) => {
      fn(this.value);
      resolve(this.value);
    });
  }
}

let p = new myPromise(function (resolve) {
  resolve(123);
});
p.then(function (val) {
  console.log(val);
});
