var start = new Date();
let timestart = start.getTime();

function StopTime() {
	var stop = new Date()
	let timestop = stop.getTime();
	timeprint = timestop - timestart;
	timeprint = timeprint / 600;

	console.log(start);
	console.log(stop);
	console.log(timestart);
	console.log(timestop);
	console.log(timeprint);
	alert("You have been on the page for: "+ timeprint + " Seconds");
}
	
	


