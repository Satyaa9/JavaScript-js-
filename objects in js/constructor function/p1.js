function Person (name , age){
	this.name=name;
	this.age=age;
}

const person = new Person("shubham", 28)
console.log(person)

/*
OUTPUT:
Person { name: 'shubham', age: 28 }

Old method of passing paramaneter to constructor before classes are not invented in js.
*/