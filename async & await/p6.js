function fun() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("in promise")
            resolve(10)
        }, 1000)
    })
}
async function getData() {
    let data = await fun()
    console.log(data + 50)
}
getData()

/*
OUTPUT:

in promise
60

aapan promise resolve karatana argument pn pass karu shakato aai tyala async function madhe catch karun promise
resolve zalya nantr tyacha vr operations pn perform karu shakto.
*/