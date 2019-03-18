//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
let i = 1;
function refreshCat() {
  document.getElementById("imageid1").src="https://cataas.com/cat/says/" + i++;
  document.getElementById("imageid2").src="https://cataas.com/cat/says/" + i++;
  document.getElementById("imageid3").src="https://cataas.com/cat/says/" + i++;
  document.getElementById("imageid4").src="https://cataas.com/cat/says/" + i++;
  document.getElementById("imageid5").src="https://cataas.com/cat/says/" + i++;
}
