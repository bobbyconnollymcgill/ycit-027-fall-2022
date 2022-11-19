// new Promise --> create a new object (a promise object)
// whenever we construct a new object, something called a "constructor" is called
// you can **optionally** pass an argument to the constructor
// in this case, we are passing a function statement called an "executor"

console.log("start of program");

new Promise((resolve) => {
  console.log("start of executor");
  setTimeout(() => {
    resolve(4);
  }, 2000);
  console.log("end of executor");
}).then((result) => {
  console.log(result);
});

console.log("rest of program");
