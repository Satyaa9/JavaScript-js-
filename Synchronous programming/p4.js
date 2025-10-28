let fetchdata = new Promise((resolve,reject) =>{
	console.log("fetching data...");

	setTimeout(() =>{
		resolve = ("data fetched successfully!");
		console.log(resolve)
	}, 2000)
});

/*
OUTPUT:

fetching data...
data fetched successfully!
*/