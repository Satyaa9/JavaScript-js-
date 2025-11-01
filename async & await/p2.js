async function fun() {
    console.log("in function fun")
    return "hello"
}
fun().then(() => {
    console.log("after promise..")
})

/*
OUTPUT:

in function fun
after promise..
*/
