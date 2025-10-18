const employee = [
	{
		name : "shubham",
		sal : 3400
	},

	{
		name : "sanket",
		sal : 5000
	},

	{
		name : "rohan",
		sal : 10000
	}
];

const data = employee.filter((val) => {
	return val.sal > 5000
});
console.log(data)

/*
OUTPUT:
[ { name: 'rohan', sal: 10000 } ]

filter mhanje aahe tya array vr operation perform karayacha.
*/