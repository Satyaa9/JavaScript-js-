function fun(callback){
	console.log("in fun")
	callback()
}
fun(function () {
	console.log("in callback")
})

/*
OUTPUT:
in fun
in callback

function expression.
*/