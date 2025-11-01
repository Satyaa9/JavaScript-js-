function fun() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("in promise")
            resolve()
        }, 1000)
    })
}
async function getData() {
    await fun()
    console.log("data from promise")
}
getData()
console.log("other tasks...")

/*
OUTPUT:

other tasks...
in promise
data from promise

jya veles aapan aikadya function la await lavto tr jya function madhun tyala call kela aahe te function
compulsory asynchronous thevav lagat.

ethe aapan await method use keli await method mhante ki jo parent tya function cha varachi task execute hot 
nahit to prent khalachi task execute karu nakos, mhanjech ti synchorouns chain banavate.

aani ethe aapan async & await use karun independent aani depenedent donhi type che execution perform karu
shakto.
*/