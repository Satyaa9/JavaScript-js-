async function fun() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}
function getData() {
    fun().then(() => {
        console.log("after promise")
    })
    console.log("random task")
}
getData()
console.log("other task...")

/*
OUTPUT:

random task
other task...
after promise

random task 1st execute honyach karan mhanje te kona vr depend nahiye jevha aapan .then() lavto tevha te 
depenedent hot pn ethe aapan .then() fun function vr lavlay.

fun() he function he synchronous aslya mule te last la execute honar.
*/