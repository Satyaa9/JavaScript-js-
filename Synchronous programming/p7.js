let data = new Promise(resolve => resolve(2))
.then(num => num *2)
.then(num => num * 3)

.then(result => console.log(result))

/*
OUTPUT:
12
*/