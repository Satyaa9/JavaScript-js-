let data = new Promise ((resolve,reject) => {
	console.log("fetching data....")

	setTimeout(() =>{
		resolve("data fetched successfully")
 	},2000)
})

data.then( (result) => 
	console.log(result)
)

/*
OUTPUT:
fetching data....
data fetched successfully // after 2 seconds
*/