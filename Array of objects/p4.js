const student = [
	{
		name : "shubham",
		marks : 78
	},

	{
		name : "sanket",
		marks : 81
	},

	{
		name : "rohan",
		marks : 70
	}
];

const data = student.filter((val) =>{
	return val.marks > 80
});
console.log(data)

/*
OUTPUT:
[ { name: 'sanket', marks: 81 } ]
*/