//var APIKey = "43f9e3879d634663391d486f1ccfdc35";
        

function Forecast(x) { 
  
  var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=" + x + "&" + "appid=43f9e3879d634663391d486f1ccfdc35";
  $.ajax({
   url: queryURL,
   method: "GET"
  }).then(function(response) {
    console.log(response)

    let chosenCity = response.city.name
    let todaysTemp = Math.floor((response.list[0].main.temp - 273.15) * 9/5 + 32)
    let todaysHumid = response.list[0].main.humidity
    let todaysWind = response.list[0].wind.speed
    
    
    $("#chosenCity").text(chosenCity + " " + response.list[0].dt_txt)
    $("#todayTemp").text("Temp: " + todaysTemp + "F")
    $("#todayHumid").text("Humidity: " + todaysHumid + "%")
    $("#todayWind").text("Wind Speed: " + todaysWind + " MPH")
    //$("#todayUv").text("UV Index: " + response.list[0].main.temp)

    $("#tomorTemp").text("Temp: " + Math.floor((response.list[1].main.temp - 273.15) * 9/5 + 32) + "F")
    $("#tomorHumid").text("Humidity: " + response.list[1].main.humidity + "%")
    $("#tomorDate").text(response.list[0+8].dt_txt)

    $("#2dayTemp").text("Temp: " + Math.floor((response.list[2].main.temp - 273.15) * 9/5 + 32) + "F")
    $("#2dayHumid").text("Humidity: " + response.list[2].main.humidity + "%")
    $("#2dayDate").text(response.list[0+16].dt_txt)

    $("#3dayTemp").text("Temp: " + Math.floor((response.list[3].main.temp - 273.15) * 9/5 + 32) + "F")
    $("#3dayHumid").text("Humidity: " + response.list[3].main.humidity + "%")
    $("#3dayDate").text(response.list[0+24].dt_txt)

    $("#4dayTemp").text("Temp: " + Math.floor((response.list[4].main.temp - 273.15) * 9/5 + 32) + "F")
    $("#4dayHumid").text("Humidity: " + response.list[4].main.humidity + "%")
    $("#4dayDate").text(response.list[0+32].dt_txt)

    $("#5dayTemp").text("Temp: " + Math.floor((response.list[5].main.temp - 273.15) * 9/5 + 32) + "F")
    $("#5dayHumid").text("Humidity: " + response.list[5].main.humidity + "%") 
    $("#5dayDate").text(response.list[0+39].dt_txt)

  });
}
//Forecast()


$("#btnDallas").on("click", function(event){
  Forecast(4684888)
})
$("#btnAustin").on("click", function(event){
  Forecast(4671654)
})
$("#btnChicago").on("click", function(event){
  Forecast(4887398)
})
$("#btnNewYork").on("click", function(event){
  Forecast(5128581)
})
$("#btnOrlando").on("click", function(event){
  Forecast(4167147)
})
$("#btnSanFrancisco").on("click", function(event){
  Forecast(5391959)
})
$("#btnSeattle").on("click", function(event){
  Forecast(5809844)
})
$("#btnDenver").on("click", function(event){
  Forecast(5419384)
})
$("#btnAtlanta").on("click", function(event){
  Forecast(4180439)
})