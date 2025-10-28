let data = new Promise(resolve => resolve(2));

data.then(num => num * 2);
data.then(num => num * 3);

data.then(result => console.log(result));
/*
OUTPUT:
2

internally multilication hot pn last la return kartana te ji resolve keleli value ch return krt 
not the output of previous .then() calls unless you chain them.
*/