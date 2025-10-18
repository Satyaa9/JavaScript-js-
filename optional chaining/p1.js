const person = {
	name : "shubham",
	age : 19,

	address : {
		city : "satara",
		pin : 415001
	}
}

console.log(person.address?.city)
console.log(person.address?.phone)

/*
OUTPUT:
satara
undefined

Optional chaining.
*/