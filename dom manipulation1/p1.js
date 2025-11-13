async function getData(){
	let response = await fetch("https://jsonplaceholder.typicode.com/users");
	let data = await response.json();
	for(let i = 0 ; i < data.length ; i++){
		console.log("name is :"+data[i].name);
		console.log("phone number is :"+data[i].phone);
		console.log("city is :"+data[i].address.city);
		console.log("username is :"+data[i].username);
		console.log("-------------------------");
	}
}

getData();

/*
OUTPUT:
name is :Leanne Graham
phone number is :1-770-736-8031 x56442
city is :Gwenborough
username is :Bret
-------------------------
name is :Ervin Howell
phone number is :010-692-6593 x09125
city is :Wisokyburgh
username is :Antonette
-------------------------
name is :Clementine Bauch
phone number is :1-463-123-4447
city is :McKenziehaven
username is :Samantha
-------------------------
name is :Patricia Lebsack
phone number is :493-170-9623 x156
city is :South Elvis
username is :Karianne
-------------------------
name is :Chelsey Dietrich
phone number is :(254)954-1289
city is :Roscoeview
username is :Kamren
-------------------------
name is :Mrs. Dennis Schulist
phone number is :1-477-935-8478 x6430
city is :South Christy
username is :Leopoldo_Corkery
-------------------------
name is :Kurtis Weissnat
phone number is :210.067.6132
city is :Howemouth
username is :Elwyn.Skiles
-------------------------
name is :Nicholas Runolfsdottir V
phone number is :586.493.6943 x140
city is :Aliyaview
username is :Maxime_Nienow
-------------------------
name is :Glenna Reichert
phone number is :(775)976-6794 x41206
city is :Bartholomebury
username is :Delphine
-------------------------
name is :Clementina DuBuque
phone number is :024-648-3804
city is :Lebsackbury
username is :Moriah.Stanton
-------------------------
*/