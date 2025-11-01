async function fun() {
    console.log("in function fun")

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}
fun().then(() => {
    console.log("After promise...")
})

/*
OUTPUT:

in function fun
After promise...
*/

