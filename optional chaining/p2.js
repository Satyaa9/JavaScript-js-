const person = {
	name : "satish",
	age : 19,

	address : {
		city : "satara",
		pin : 415001
	}
}
console.log(person.address?.city)
console.log(person.address?.pin)

/*
OUTPUT:
satara
415001
*/