//var APIKey = "43f9e3879d634663391d486f1ccfdc35";
        
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=3245&" + "appid=43f9e3879d634663391d486f1ccfdc35";
 
function Forecast() { 
 $.ajax({
   url: queryURL,
   method: "GET"
 }).then(function(response) {
     console.log(response)
     console.log(5+5)
 });
}
Forecast()