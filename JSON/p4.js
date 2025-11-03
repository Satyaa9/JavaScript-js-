const jsonString = '[{"name" : "satish" , "age" : 21},{"name" : "snehal" , "age" : 19}]'

let data = JSON.parse(jsonString)
console.log(data[1].name)

/*
OUTPUT:

snehal

aikda aapan string la object madhe convert kel ki aapan tyacha vr indexing laun data retrieve karu shakto.

*/