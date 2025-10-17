const student1 = {
	name : "satish",
	age : 19,

	marks(){
		console.log("90....");
	}
};
student1.name = "sanket"
console.log(student1)

/*
OUTPUT:
{ name: 'sanket', age: 19, marks: [Function: marks] }

Value updation in object.
*/