//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
function displayBeers() {
  axios.get('https://api.punkapi.com/v2/beers')
    .then(function (response) {

      var keys = Object.keys(response);

      for (var i = 0, len = keys.length; i < len; i++) {
        console.log(response[keys[i]['data']]);
      }

      /*for (var i in response) {
        console.log(response['data'][0]['name']);
      }*/
    })
}
