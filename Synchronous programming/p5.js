console.log("Get Data :");
let fetchdata = new Promise((resolve , reject) =>{
	console.log("Data Fetching...");

	setTimeout(() =>{
		resolve = ("Data Fetched Successfully!");
		console.log(resolve);
	}, 2000);
});

setTimeout (() =>{
	console.log("System Crash````");
},2000);

/*
OUTPUT:
Get Data :
Data Fetching...
Data Fetched Successfully!
System Crash````
*/