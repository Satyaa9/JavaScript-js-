const jsonString = '{"name" : "satish" , "age" : 28}'
let data = JSON.parse(jsonString)
console.log(data)
console.log(typeof data)

/*
OUTPUT:

{ name: 'satish', age: 28 }
object

string ch object madhe conversion karnya sathi JSON.parse() hya method ne aapan karu shakato.

*/