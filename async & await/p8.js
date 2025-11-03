function career(){
	return new Promise((resolve , reject)=>{
		setTimeout(()=>{
			console.log("Engineering..")
			resolve(10)
		},1000)
	})
}
function job(){
	return new Promise((resolve , reject)=>{
		setTimeout(()=>{
			console.log("IT JOB 10--LPA")
			resolve(20)
		},1000)
	})
}
async function getData(){
		let cData = await career()
		let jData = await job()
		console.log(cData + jData)
}
getData()

/*
OUTPUT:
Engineering..
IT JOB 10--LPA
30

jr promise resolve nahi kel tr code await chya khali yet nahi
*/