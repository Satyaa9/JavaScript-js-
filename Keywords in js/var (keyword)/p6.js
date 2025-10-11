function fun(){
	if(false){
		var a=10;
		console.log(a);
	}
	console.log(a);
}
fun();
/*
OUTPUT:
undefined

Karan ethe compiler la a sapdtoy pn condition false aslya mule te initialize nahiye hot.
*/