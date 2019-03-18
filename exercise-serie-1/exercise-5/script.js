//Check to see if script is linked properly.
console.log("This script is linked properly!");


//Write your JS code here...
let i = 1;
function refreshCat() {
  setTimeout(function(){ document.getElementById("imageid").src="https://cataas.com/cat/says/" + i++; refreshCat(); }, 3000);
}
