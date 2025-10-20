console.log("task 1")
setTimeout(() => {
	console.log("order....")
},2000)

for(let i =1 ; i<10 ; i++){
	console.log(i)
}

console.log("task 4")

/*
OUTPUT:
task 1
1
2
3
4
5
6
7
8
9
task 4
order....
*/