const students = [
	{
		name : "shubham",
		phone : 123
	},

	{
		name : "sanket",
		phone : 456
	},

	{
		name : "rohan",
		phone : 789
	}
];

const names = students.map((val) => {
	return val.name
});

console.log(names)

/*
OUTPUT:
[ 'shubham', 'sanket', 'rohan' ]

array madhe object store kelet.
*/