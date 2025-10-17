const student1 = {
	name : "satish",
	age : 19,

	fun(){
		console.log("in fun")
	}
};
student1.name= "sanket"
student1["age"]=21
console.log(student1)

/*
OUTPUT:
{ name: 'sanket', age: 21, fun: [Function: fun] }

object value updation using 2 different methods.
*/