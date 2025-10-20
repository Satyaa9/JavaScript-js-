console.log("task 1")

setTimeout (() => {
	console.log("order .....")
}, 2000)

console.log("task 4")

/*
OUTPUT:
task 1
task 4
order .....

jya veles aapan synchronous programming madhe execution krt hoto tyaveles jo parent 1st task execute hot nahi toparent dusre task execute hot navhte.
Pn asynchronous programming jr ekhadya task la time lagat asel tr te task background la run hot aani jyala kami time lagto te pahil execute hot aani nantr last la jyala time lagto te execute hot. 

setTimeout method la 2 parameters aahet
1- callback function
2- time

asynchronous programming madhe task block kele jat nahit.
*/