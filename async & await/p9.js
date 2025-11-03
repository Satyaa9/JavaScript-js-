const getData = async () => {
	console.log("Hello")
}

async function fun(){
	console.log("Welcome")
	getData()
}
fun()

/*
OUTPUT:

Welcome
Hello

aapan fkt function chya pudhe async lau shakto aani ethe arrow function he function aahe tithe async 
lau shakto.
*/