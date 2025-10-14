let arr=[10,20,3,4]
data = arr.map((val, index) => {
	 return val>5
})
console.log(data)
console.log(arr)

/*
OUTPUT:
[ true, true, false, false ]
[ 10, 20, 3, 4 ]

map function vr aapan boolean operations perform karu shakato pn aapan te krt nahi karan tyacha main purpose aahe arithmetic operation perform karne.
*/