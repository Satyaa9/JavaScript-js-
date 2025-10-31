new Promise((resolve , reject) =>{
	console.log("in promise")
	reject("promise rejected")
})
.then(()=>{
	console.log("in then block")
})
.catch((err) =>{
	console.log("in catch block", err)
})

/*

OUTPUT:

in promise
in catch block promise rejected

jr aapal promise reject or resolve hot asel tr aapan tyala msg pn pass karu shakato aani jr to resolve cha msg asel tr .then() madhe aik variable gheun catch karayacha aani jr reject hot asel tr .catch() madhe catch karayacha variable madhe.

*/