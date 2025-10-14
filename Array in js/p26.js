let arr=[1,2,3,4]
data = arr.map((val,index) => 10)
console.log(data)
console.log(arr)

/*
OUTPUT:
[ 10, 10, 10, 10 ]
[ 1, 2, 3, 4 ]

map cha return type array aahe.
aani te original array cha related ast.
saglya thikani 10 put krt pn original array madhe change krt nahi.
*/