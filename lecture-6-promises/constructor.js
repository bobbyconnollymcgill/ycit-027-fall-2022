class Animal {
  // In the case of promises, arg1 is the "executor" is is being passed in, when we do "new Promise(executor)"
  // Some classes take no parameters in their constructor (since no inputs needeed to construct the object)
  constructor(arg1) {
    console.log("constructor is running", arg1);

    this.someProperty = arg1;
  }

  someProperty = 3;

  someMethod = () => {
    console.log("HELLO!", this.someProperty);
  };
}

// Example...

const obj = new MyClass(4);
const anotherObj = new MyClass(6);

obj.someMethod();

console.log("end");
