function career() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("Engineering")
			resolve()
		}, 1000)
	})
}

function job() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("IT 20 LPA...")
			resolve()
		}, 1000)
	})
}

function gadi() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("XUV 700")
			resolve()
		}, 1000)
	})
}

function bangla() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("3 BHK")
			resolve()
		}, 1000)
	})
}

function marr() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("Fix")
			resolve()
		}, 1000)
	})
}

career()
	.then(job)
	.then(gadi)
	.then(bangla)
	.then(marr)
	.then(() => {
		console.log("All Targets Completed....")
	})

/*
OUTPUT:

Engineering
IT 20 LPA...
XUV 700
3 BHK
Fix
All Targets Completed....

ha code aapan same callback sarkhach lihila aahe pn ethe Promise use kel aahe aani tyachi .then() method m
sarkha sarkh callback karayacha problem solve zala.

mhanje aapan without promise aani .then() use karta pn function chaining karu shakto pn te jast complecated
aahe.

pn yacha madhe sudha aik problem aahe to mhanje aaplyala sarkh sarkh .then() lihav lagatay.
*/