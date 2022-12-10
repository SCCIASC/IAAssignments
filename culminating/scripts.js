var start = new Date();
let timeonload = start.getTime();

function timecounter() {
	var stop = new Date()
	let timeonbuttonpress = stop.getTime();
	timefinal = timeonbuttonpress - timeonload;
	timefinal = timefinal / 600;
  let roundedfinal = Math.trunc( timefinal )
	alert("You have been on the page for: "+ roundedfinal + " Seconds");
}

// Updating Digital clock referenced from: https://flexiple.com/javascript/javascript-clock/

function clock() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
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
  
    document.getElementById("clockdisplay").innerText = time; 
    let t = setTimeout(function(){ clock() }, 1000);
  }