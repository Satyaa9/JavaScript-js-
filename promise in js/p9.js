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

console.log("Execute before promise")

/*
OUTPUT:

Execute before promise
promise resolved

promise vr kahi goshti indepenedent astat tr kahi independed astat tyamule aapalayala tyamule aaplyala decide karav lagat ki promise depenedent asel tr te jr resolve zalya vr kay karayach aani reject zalya vr kay karayach.
*/