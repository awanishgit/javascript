function Human(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    }
}

var person1 = new Human("Awanish", "Pandey");
var person2 = new Human("Amit", "Gupta");

console.log(person1.fullName());

/*i.e. every object created using the constructor function will have it’s own copy 
 * of properties and methods. It doesn’t make sense to have two instances of function
  fullName that do the same thing. Storing separate instances of function for each objects
  results into wastage of memory. We will see as we move forward how we can solve this issue.
*/

// https://hackernoon.com/prototypes-in-javascript-5bba2990e04b

console.log(person1);
