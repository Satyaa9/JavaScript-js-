console.log("task 1")

setTimeout(() => {
	console.log("order...")
},3000)

console.log("task 2")
console.log("task 3")
console.log("task 4")

/*
OUTPUT:
task 1
task 2
task 3
task 4
order...
*/