//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
function changePos() {
    var float = document.getElementById("knopje");
    var x = Math.floor(Math.random() * 600);
    var y = Math.floor(Math.random() * 600);
    float.style.top = y + 'px';
    float.style.left = x + 'px';
}
