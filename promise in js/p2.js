let data = new Promise(resolve =>resolve(2))

data.then(num => num * 2)
data.then(num => num * 3)

data.then(result => 
	console.log(result)
)

/*
OUTPUT:
2

It gives a same output because 


data.then(num => num * 2);

This attaches a .then() handler to the promise.
But notice — the function’s return value (num * 2) is not used anywhere —
it’s not chained or printed.

So this .then() executes internally, calculates 2 * 2 = 4,
but since we don’t do anything with it, the result is ignored.

*/