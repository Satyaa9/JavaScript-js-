const obj = {
	name : "satish",
	age : 21
}

const jsonString = '{"name" : "Snehal", "age" : 19}'

console.log(obj)
console.log(jsonString)

console.log(typeof obj)
console.log(typeof jsonString)

/*
OUTPUT:

{ name: 'satish', age: 21 }
{"name" : "Snehal", "age" : 19}
object
string

json backend kadun data gheun yetana to object format madhe ast fkt object string chya aat aahe . karan string madhe data light weight asto mhanje tyala kami storage lagto.
*/