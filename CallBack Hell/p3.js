function career(callback){
	console.log("Engineering")
	
	setTimeout(()=>{
		callback()
	},1000)
}
career(function(){
	console.log("carrear settled...")
})

/*
OUTPUT:
Engineering
carrear settled...

*/