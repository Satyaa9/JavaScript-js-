const person = {
    name : "shubham",
    age : 29,
    addrees : {city : "pune" , county : "india"}
};
console.log(JSON.stringify(person))

/*
OUTPUT:

{"name":"shubham","age":29,"addrees":{"city":"pune","county":"india"}}
*/