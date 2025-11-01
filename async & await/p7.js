function fun() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //success = true
            success = false
            if (success) {
                resolve(10)
            } else {
                reject("promise rejected")
            }
        }, 1000)
    })
}
async function getData() {
    try {
        let data = await fun()
        console.log(data + 50)
    } catch (err) {
        console.log(err)
    }
}
getData()

/*
OUTPUT:
promise rejected

jr promise reject hot asel tr rejection handle karnya sathi aaplyala try & catch block use karava lagto.
*/