// Function declaration
function sayHi(){
    return "Hi!";
}
// Function Expression
const sayBye = function() {
    return "Bye!";
}
//Arrow function (one parameter)
const greet = name => `Hello, ${name}`;

//Arrow function with multiple lines
const multiply = (x, y) => {
    console.log(`multiplying ${x} and ${y}`);
    return x * y;
}

//Using .map with arrow functions
const nums = [1, 2, 3, 4];
const squared = nums.map(n => n ** 2);

// Function expression called divide
const divide = function() {
  return 2000 / 100;
}

// Arrow function called square that takes one parameter
const square = x => x * x;

// Arrow function called add that takes two parameters
const add = (a, b) => a + b;