let arr=[10,20,3,4]
data=arr.filter((val,index) => {
	return val>5
})
console.log(data)
console.log(arr)

/*
OUTPUT:
[ 10, 20 ]
[ 10, 20, 3, 4 ]

filter method use kelya vr ti aadhi condition chya according operation perform karte aani jithe jithe true yeil tya index varachi value return karte.
-filter method fkt conditional operation vr aaplya hote.
*/