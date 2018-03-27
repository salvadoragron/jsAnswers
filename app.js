// Check the console inside chrome developer tools to see me running

console.log("Hello I'm running")
//1
console.log("Richard Gill")

//2
var firstName = "Joe";
var lastName = "Rosenfield";

var firstNamelastName = function (firstName, lastName) {
	console.log(firstName + " " + lastName);
}
firstNamelastName(firstName, lastName)

//3
var lastNamefirstName = function (lastName, firstName) {
	console.log(lastName + ", " + firstName);
}
lastNamefirstName(lastName, firstName)

//4
console.log(firstName.length)

//5
var people = ['Jack', 'John', 'James']

for (var i = people.length - 1; i >= 0; i--) {
		console.log(people[i])
	}


