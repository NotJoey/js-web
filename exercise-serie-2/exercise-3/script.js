//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
let cookies = 0;
let clicks = 1;
let multiprice = 50;
let autoprice = 100;
document.getElementById("multibutton").style.visibility = "hidden";

function addpoint() {
  for (i = 0; i < clicks; i++) {
  cookies++;
}
refresh();
}

function refresh() {
  document.getElementById("score").innerHTML = "Score: " + Math.round(cookies);
  if (cookies >= multiprice)
  {
    document.getElementById("multibutton").style.visibility = "visible";

  }
  else {
    document.getElementById("multibutton").style.visibility = "hidden";
  }
}

function multiply() {
  clicks = clicks*2;
  cookies = cookies - multiprice;
  multiprice = multiprice * 1.5;
  refresh();
}
