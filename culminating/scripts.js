// HOW LONG ON SITE ----------------------------------------------- //

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


// UPDATING DIGITAL CLOCK ----------------------------------------------- //
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


  // PLANT RANDOMIZER ----------------------------------------------- //

  function randomplant() {
      const plant = ["Roses", "Lillies", "Tulips", "Orchids", "Carnations", "Hyacinths", "Peruvian Lillies", "Chrysanthemums", "Gladiolus", "Anemone", "Daffodil", "Poppy", "Sunflower"];
      const random = Math.floor(Math.random() * plant.length);
      document.getElementById("output").innerHTML=(plant[random]);
  }


 // BONUS THANK YOU ----------------------------------------------- //

  function thankyou() {
    alert("Hi! Just wanted to pop in to say thank you for this semester. It was fun learning a new coding language (even though some people dont consider html or css a coding language..)");
    alert("Anyways, I hope you're enjoying your experience on the site, I had fun making it, and really enjoyed learning the basics of javascript. Dont worry, this is the last alert :P");
  }
  