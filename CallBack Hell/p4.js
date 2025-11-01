function career(callback){
	console.log("Engineering")

	setTimeout(()=>{
		callback()
	},1000)
}

function job(callback){
	console.log("in IT...20LPA")
	
	setTimeout(()=>{
		callback()
	},1000)
}

function car(callback){
	console.log("XUV700...")
		
	setTimeout(()=>{
		callback()
	},1000)
}

function bangla(callback){
	console.log("3 BHK in satara")

	setTimeout(()=>{
		callback()
	},1000)
}

function marriage(callback){
	console.log("Marriage Fix")

	setTimeout(()=>{
		callback()
	})
}

career(function() {
	job(function(){
		car(function(){
			bangla(function() {
				marriage(function(){

				})
			})
		})
	})
})

console.log("Roj Jevan Karayach....")

/*
OUTPUT:

Engineering
Roj Jevan Karayach....
in IT...20LPA
XUV700...
3 BHK in satara
Marriage Fix

callback hell mhanje multiple callback astat aani te aika meka vr depenedent astat.

pn yacha madhe aik problem aahe to mhanje sarkh sarkh callback la call karav lagatay.
*/