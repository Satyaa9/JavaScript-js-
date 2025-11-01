
async function fun() {
    console.log("in function fun")
    return "hello"
}

let a = fun()
console.log(a)

/*
OUTPUT:
in function fun
Promise { 'hello' }

Every asynchronous function returns a promise.

promise was better than the nested callback but .then() looks messy so we using async and await.
*/
