let data = new Promise (resolve => resolve(2))
.then(num => num*2)
.then(num => num*3)
.then((result) => (
	console.log(result)
))

/*

Chaining Promises


OUTPUT:
12

Promise resolved → value = 2

.then(num => num * 2) : New Promise → value = 4 : This .then() gets the resolved value from the previous Promise (2).

.then(num => num * 3) : Next Promise → value = 12 : This .then() gets the value from the previous .then() (which was 4).

.then(result => console.log(result)) : Finally, this .then() receives the last resolved value (12)

Step	Value Passed	Operation		Result
1	    2		num * 2	4
2	    4	        num * 3	12
3	   12	     console.log(result)	Prints 12

*/