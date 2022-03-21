const apiKey = "fd22a6487495bb541bdc8d1edcd9feee"; 

//time and date
var date = "";
var dateTime = '';

var currentDay = document.getElementById('currentDay');
var time= $('#currentDay');

//form
var searchBtn = document.getElementById('searchBtn');
var searchInput = document.getElementsByClassName('searchInput');

//aside
var cityName = document.getElementsByClassName("cityName");
var currentDay = document.getElementsByClassName("currentDay");
var searchHistory = document.getElementsByClassName("pastCityList");
var weatherIcon = document.getElementsByClassName('weatherIcon');

//current city elements
var temp = document.getElementsByClassName('temp');
var humid = document.getElementsByClassName("humidity");
var wind = document.getElementsByClassName('wind');
var uv = document.getElementsByClassName('uv');
var cardRow = document.getElementsByClassName('cardRow');

//forecast
var day1 = document.getElementById('dayOne');
var days = document.getElementsByClassName('day');



var day2 = document.getElementById('dayTwo');
var day3 = document.getElementById('dayThree');
//current time
var currentTime = function() {
    date = moment().format('MMMM Do YYYY');
    time.text(date);
};

$(document).ready(function(){
    dateTime = $('#currentDay');
    currentTime();
}
);



//assess existing history
if (JSON.parse(localStorage.getItem('searchHistory')) ===null ){
    console.log('none');
} else {
    console.log('searchHistoryArr loaded');
    //renderSearchHistory();
}


//button event
searchBtn.addEventListener('click', getWeather);

//API call getWeather should be named get Lat and Lon
function getWeather(searchedCity) {
    searchedCity.preventDefault()
    var city = document.getElementById('searchInput').value;
    // console.log(city);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(function(res) {
            return res.json();
        }       
        )
        .then(function(data) {
            // console.log(data);
            var cityToSave = {
                name: data.name,
                lat: data.coord.lat,
                lon: data.coord.lon,
            }
            
            // console.log(cityToSave);
            var historyToCheck = localStorage.getItem('searchedHistory');
            // console.log(historyToCheck);
            var historyCheck = JSON.parse(historyToCheck);
            // console.log(historyCheck);
            if (historyCheck === null) {
                var arrayToSave = [cityToSave];
                var arrayToString = JSON.stringify(arrayToSave);
                console.log(arrayToString);
                localStorage.setItem('searchHistory', arrayToString);
                console.log(localStorage.getItem("searchedHistory"));
                renderBtns(arrayToSave);
            } else {
                console.log('historyExists');
                var searchedCity = JSON.parse(localStorage.getItem('searchHistory'));
                searchedCity.unshift(cityToSave);
                localStorage.setItem('searchHistory', JSON.stringify(searcheCity));
                console.log(searchedCity);
                renderBtns(searchedCity);
            }
            getActualWeather(cityToSave.lat, cityToSave.lon);

        });
}

function renderBtns(cityArr) {
    console.log('functionToRenderBtns', cityArr);
    //create button contains city name long and lat 
    //event listener click for each
    //create for loop that creates button with this in an array from local storage
}

// var temp = $('.temp')



function getActualWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
    .then(function(res) {
        return res.json() 
    }) .then(function(data) {
        // console.log(data);
        temp[0].textContent = "Temperature: " + data.current.temp;
        // console.log(temp);
        // day1.textContent = data.daily[0].temp;
        // console.log(day1);

        for (let i = 0; i < days.length; i++) {
            var tempEl = document.createElement('div');
            var windEl = document.createElement('div');
            var dateEl = document.createElement('div');
            var humidEl = document.createElement('div');
            // var iconEl = document.createElement('img');

            tempEl.textContent = data.daily[i].temp.day;
            windEl.textContent = data.daily[i].weather.wind_speed;
            dateEl.textContent = data.daily[i].dt;
            humidEl.textContent = data.daily[i].humidity;
            // iconEl.setAttribute('src') 

            days[i].appendChild(tempEl);
            days[i].appendChild(windEl);
            days[i].appendChild(dateEl);
            days[i].appendChild(humidEl);
            
        }
        



    }
    
    )
}; 







//// older work
var long ='';
var lat ='';

//Get coordinates first 
var getWeather = function (city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=fd22a6487495bb541bdc8d1edcd9feee";
    
    // make a request to the url
    fetch(apiUrl).then(function (response) {
        console.log(response);
        response.json().then(function (data) {
            // lat = (data.coord.lat);
            // long = (data.coord.lon);
            console.log(data);
            // console.log (lat);
            // console.log (long);
            // getWeather(lat,long);
        });
    });
};

getWeather('London');


