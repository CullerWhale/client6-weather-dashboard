long ='';
lat ='';

//Get coordinates first 
var getCoords = function (city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=fd22a6487495bb541bdc8d1edcd9feee";
    
    // make a request to the url
    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            lat = (data.coord.lat);
            long = (data.coord.lon);
            // console.log(data);
            // console.log (lat);
            // console.log (long);
            

            // getWeather(lat,long);
        });
    });
};

getCoords('London');

// console.log(data);
// console.log(lat);
// console.log(long);






var getWeather = function (lat,long) {
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make a request to the url
    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
        });
    });


};

getWeather('London');