function fun() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {

			success = true;

			if (success) {
				resolve()
			}
			else {
				reject()
			}
		}, 3000)
	})
}

fun()
	.then(() => {
		console.log("promise resolved")
	})
	.catch(() => {
		console.log("promise rejected")
	})
	.finally(() => {
		console.log("cleanup code")
	})

console.log("before promise")

/*
OUTPUT:

before promise
promise resolved
cleanup code

finally block madhe cleanup cha code lihila jato.

aani finally block saglyat last la execute hoto.
*/