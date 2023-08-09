
const jokes = document.getElementById('dadJoke');
const getDadJokes = async () => {
	const response = await fetch('https://icanhazdadjoke.com/', {
		method: 'GET',
		headers: {
			accept: 'application/json',
		},
})
	const data = await response.json();
	jokes.innerHTML = data.joke;
	console.log(data);
	return data;
}

// function showTime(){
// 	var date = new Date();
// 	var current_date = date.getDate()+"-"+(date.getMonth()+1)+"-"+ date.getFullYear();
// 	var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
// 	document.getElementById("time").innerHTML = current_time; 
// 	document.getElementById("date").innerHTML = current_date; 
// 	setTimeout(showTime, 1000);
// }
// showTime();


function showTime(){
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  var current_date = date.getDate()+"-"+(date.getMonth()+1)+"-"+ date.getFullYear();

  if(hh == 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("time").innerText = time; 
  document.getElementById("date").innerHTML = current_date; 
  setTimeout(showTime, 1000);
  // or
  // let t = setTimeout(function(){ showTime() }, 1000);
}
showTime();