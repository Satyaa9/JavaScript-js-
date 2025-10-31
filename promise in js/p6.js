new Promise((resolve , reject) =>{
	console.log("in promise")
	reject()
})
.catch(() =>{
	console.log("in catch block")
})

/*
OUTPUT:

in promise
in catch block

jr operation reject hot asel tr tyacha vr dependent asanarya goshti .catch block execute hoto.
*/