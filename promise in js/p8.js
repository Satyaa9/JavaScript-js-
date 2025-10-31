function fun() {
	new Promise((resolve, reject) => {
		setTimeout(() => {
			success = true;

			if (success) {
				resolve()
			}
			else {
				reject()
			}
		}, 3000)
	}).then(() => {
		console.log("promise resolved...")
	}).catch(() => {
		console.log("promise rejected")
	})
}

fun()

console.log("separate line")

/*
OUTPUT:
separate line
promise resolved...

ethe setTimeout aani .then() method synchronousnally work krt aahet.
aani last vali print chi line aahe ti aani Promise asynchronousnally work krt karan setTimeout lavlya mule tyala execute hoila time lagnar aani mg ti last la execute honar.
*/