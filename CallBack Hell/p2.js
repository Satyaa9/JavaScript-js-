function fun(callback){
	console.log("in fun")
	
	setTimeout(() =>{
		callback()
	}, 1000)
}
fun(function () {
	console.log("in callback")
})
console.log("other task...")

/*
OUTPUT:
in fun
other task...
in callback

callback hell happens when we write a nested callback functions.
*/