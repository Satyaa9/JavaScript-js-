function fun (){
	if(false){
		a=10;
		console.log(a);
	}
	console.log(b);
}
fun();

/*
OUTPUT:
Error: b is not defined
*/