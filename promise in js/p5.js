new Promise((resolve, reject) => {
	console.log("in promise");
	resolve()
})
	.then(() => {
		console.log("in resolve")
	})

/*
OUTPUT:
in promise
in resolve

jevha promise resolve hoto tevha tyacha vr indepenedent asnarya goshti .then() block madhe execute hoto.
*/