/**
 * A programming language is said to have First-class functions when functions
 * in that language are treated like any other variable. For example, in such a
 * language, a function can be passed as an argument to other functions, can be
 * returned by another function and can be assigned as a value to a variable.
 */
var variableFunction  = () => console.log("Hello Javascript first class function.");
variableFunction();

//Functions as values of keys of an object

var functionObject = {
    print: (value) => console.log(value)
};

// Access function function property of object

functionObject.print("Function Object.");

// Another way
var secondFunctionObject = {
    printValue: function(value) {
        console.log(value);
    },
    increaseValue: function(value) {
        value = parseInt(value) + 1;
        console.log(value);
    }

}

secondFunctionObject.printValue("Another way function object");
secondFunctionObject.increaseValue(10);

//Higher order function

var add = (x,y) => x + y;
var subtract = (x,y) => x - y;
var multiply = (x,y) => x * y;

var arrayOfFunctions = [add, subtract, multiply];

arrayOfFunctions.forEach(calculationFunction => console.log(calculationFunction(1,1))); // 2 0 1

// simple example of for each
var intArray = [1,2,3];

intArray.forEach(function(value) {
    console.log(value);
});

console.log("=============================================================");

var addWrapper = () => (x,y) => x + y;

var add = addWrapper();

var sum1 = add (1,2); // 3

// Or we could do it like this
var sum2 = addWrapper()(4,4); // 8
console.log(sum2);

// Another way of
var addWrapper2 = function() {
    return function (x,y) {
        return x + y;
    }
}
var sum3 = addWrapper2()(5,5);
console.log(sum3);

// Another example

var calculate = function (x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        }
    }
}
console.log(calculate(1)(2)(3));

// Another crazy example
console.log("================Another crazy example =========================");

var bankStatement =
      name =>
        location =>
          balance =>
            `Hello ${name}! Welcome to the bank of ${location}. Your current balance is ${balance}`;

var statementExpectingLocation = bankStatement("Omer");
var statementExpectingBalance = statementExpectingLocation("NYC");
var bankStatementMsg = statementExpectingBalance("100 million"); // wishful thinking?

console.log(bankStatementMsg); // Hello Omer! Welcome to the bank of NYC. Your current balance is 100 million

// We could also call the function with all the arguments up front
var msg = bankStatement("Jeff Bezos")("Silicon Valley")("97.7 billion");
console.log(msg); // Hello Jeff Bezos! Welcome to the bank of Silicon Valley. Your current balance is 97.7 billion

// Another way to define above
var bankSmt = function (name) {
    return function (location) {
        return function (balance) {
            return `Hello ${name}! Welcome to the bank of ${location}. Your current balance is ${balance}`;
        }
    }
};
console.log(bankSmt("Awanish")("Delhi")("100 Crore"));